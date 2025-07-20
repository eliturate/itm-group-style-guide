// Navigation functionality for ITM Style Guide

document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.style-guide-section');

    // Handle navigation clicks
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            try {
                // Remove active class from all links and sections
                navLinks.forEach(l => l.classList.remove('active'));
                sections.forEach(s => s.classList.remove('active'));

                // Add active class to clicked link
                this.classList.add('active');

                // Show corresponding section
                const targetId = this.getAttribute('href').substring(1);
                const targetSection = document.getElementById(targetId);
                if (targetSection) {
                    targetSection.classList.add('active');
                } else {
                    console.warn(
                        `Navigation target section not found: ${targetId}`
                    );
                }

                // Update URL hash
                window.location.hash = targetId;

                // Ensure only one active link
                const activeLinks =
                    document.querySelectorAll('.nav-link.active');
                if (activeLinks.length > 1) {
                    // Remove active class from all except the clicked one
                    activeLinks.forEach(link => {
                        if (link !== this) {
                            link.classList.remove('active');
                        }
                    });
                }

                // Debug: Log active states
                if (
                    typeof process !== 'undefined' &&
                    process.env.NODE_ENV === 'development'
                ) {
                    const finalActiveLinks =
                        document.querySelectorAll('.nav-link.active');
                    console.log(
                        `Active navigation links: ${finalActiveLinks.length}`
                    );
                }
            } catch (error) {
                console.error('Navigation error:', error);
            }
        });
    });

    // Handle initial hash
    function handleHash() {
        const hash = window.location.hash.substring(1);
        if (hash) {
            const targetLink = document.querySelector(
                `.nav-link[href="#${hash}"]`
            );
            if (targetLink) {
                targetLink.click();
            }
        }
    }

    // Handle hash changes
    window.addEventListener('hashchange', handleHash);

    // Set initial state
    handleHash();

    // Mobile menu toggle
    const mobileMenuToggle = document.createElement('button');
    mobileMenuToggle.className = 'mobile-menu-toggle';
    mobileMenuToggle.innerHTML = '☰';
    mobileMenuToggle.style.cssText = `
        display: none;
        position: fixed;
        top: 20px;
        left: 20px;
        z-index: 1000;
        background: var(--color-primary);
        color: white;
        border: none;
        padding: 10px 15px;
        border-radius: 5px;
        font-size: 20px;
        cursor: pointer;
    `;

    document.body.appendChild(mobileMenuToggle);

    const nav = document.querySelector('.style-guide-nav');

    mobileMenuToggle.addEventListener('click', function () {
        nav.classList.toggle('open');
        this.innerHTML = nav.classList.contains('open') ? '✕' : '☰';
    });

    // Show mobile menu toggle on small screens
    function checkMobile() {
        if (window.innerWidth <= 768) {
            mobileMenuToggle.style.display = 'block';
        } else {
            mobileMenuToggle.style.display = 'none';
            nav.classList.remove('open');
            mobileMenuToggle.innerHTML = '☰';
        }
    }

    window.addEventListener('resize', checkMobile);
    checkMobile();

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function () {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
