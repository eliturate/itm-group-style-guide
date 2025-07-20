// JavaScript Effects for ITM Style Guide

document.addEventListener('DOMContentLoaded', function() {
    // Click Ripple Effect
    const rippleButton = document.querySelector('.click-ripple .effect-button');
    if (rippleButton) {
        rippleButton.addEventListener('click', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const ripple = document.createElement('span');
            ripple.className = 'ripple';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    }
    
    // Magnetic Hover Effect
    const magneticBox = document.querySelector('.magnetic-hover .effect-box');
    if (magneticBox) {
        const magneticContainer = magneticBox.parentElement;
        
        magneticContainer.addEventListener('mousemove', function(e) {
            const rect = magneticBox.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            
            const deltaX = (e.clientX - centerX) * 0.1;
            const deltaY = (e.clientY - centerY) * 0.1;
            
            magneticBox.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
        });
        
        magneticContainer.addEventListener('mouseleave', function() {
            magneticBox.style.transform = 'translate(0, 0)';
        });
    }
    
    // Scroll Animation Observers
    const scrollElements = document.querySelectorAll('.scroll-fade .effect-box, .scroll-slide .effect-box, .scroll-parallax .effect-box');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    scrollElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease';
        scrollObserver.observe(el);
    });
    
    // Carousel Navigation
    const carouselDots = document.querySelectorAll('.carousel-dot');
    const prevButton = document.querySelector('.carousel-prev');
    const nextButton = document.querySelector('.carousel-next');
    let currentSlide = 0;
    
    function setActiveSlide(index) {
        carouselDots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
        currentSlide = index;
    }
    
    carouselDots.forEach((dot, index) => {
        dot.addEventListener('click', () => setActiveSlide(index));
    });
    
    if (prevButton) {
        prevButton.addEventListener('click', () => {
            const newIndex = currentSlide === 0 ? carouselDots.length - 1 : currentSlide - 1;
            setActiveSlide(newIndex);
        });
    }
    
    if (nextButton) {
        nextButton.addEventListener('click', () => {
            const newIndex = currentSlide === carouselDots.length - 1 ? 0 : currentSlide + 1;
            setActiveSlide(newIndex);
        });
    }
});