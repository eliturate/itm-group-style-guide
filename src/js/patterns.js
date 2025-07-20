// Pattern animations for ITM Style Guide

document.addEventListener('DOMContentLoaded', function () {
    // Moving Circles Pattern
    function initMovingCircles() {
        const container = document.getElementById('movingCircles');
        if (!container) {
            return;
        }

        const colors = ['#F27252', '#621039', '#2CBBAF'];
        const circles = [];

        // Create circles
        for (let i = 0; i < 5; i++) {
            const circle = document.createElement('div');
            circle.className = 'moving-circle';
            const size = Math.random() * 30 + 20;
            circle.style.width = size + 'px';
            circle.style.height = size + 'px';
            circle.style.background =
                colors[Math.floor(Math.random() * colors.length)];
            circle.style.left = Math.random() * 80 + 10 + '%';
            circle.style.top = Math.random() * 80 + 10 + '%';
            circle.style.animationDelay = Math.random() * 5 + 's';
            circle.style.animationDuration = 15 + Math.random() * 10 + 's';
            container.appendChild(circle);
            circles.push(circle);
        }
    }

    // Interactive Particles Pattern
    function initInteractiveParticles() {
        const container = document.getElementById('particlesContainer');
        if (!container) {
            return;
        }

        const particles = [];
        const lines = [];
        const particleCount = 20;
        const connectionDistance = 80;

        // Create particles
        for (let i = 0; i < particleCount; i++) {
            const particle = {
                element: document.createElement('div'),
                x: Math.random() * container.offsetWidth,
                y: Math.random() * container.offsetHeight,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5
            };

            particle.element.className = 'particle';
            particle.element.style.left = particle.x + 'px';
            particle.element.style.top = particle.y + 'px';
            container.appendChild(particle.element);
            particles.push(particle);
        }

        // Animation loop
        function animate() {
            // Clear existing lines
            lines.forEach(line => line.remove());
            lines.length = 0;

            particles.forEach(particle => {
                // Update position
                particle.x += particle.vx;
                particle.y += particle.vy;

                // Bounce off walls
                if (particle.x <= 0 || particle.x >= container.offsetWidth) {
                    particle.vx *= -1;
                }
                if (particle.y <= 0 || particle.y >= container.offsetHeight) {
                    particle.vy *= -1;
                }

                // Keep within bounds
                particle.x = Math.max(
                    0,
                    Math.min(container.offsetWidth, particle.x)
                );
                particle.y = Math.max(
                    0,
                    Math.min(container.offsetHeight, particle.y)
                );

                // Update element position
                particle.element.style.left = particle.x + 'px';
                particle.element.style.top = particle.y + 'px';
            });

            // Draw connections
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < connectionDistance) {
                        const line = document.createElement('div');
                        line.className = 'particle-line';

                        const angle = Math.atan2(dy, dx);
                        line.style.width = distance + 'px';
                        line.style.left = particles[j].x + 'px';
                        line.style.top = particles[j].y + 'px';
                        line.style.transform = `rotate(${angle}rad)`;
                        line.style.opacity =
                            (1 - distance / connectionDistance) * 0.3;

                        container.appendChild(line);
                        lines.push(line);
                    }
                }
            }

            requestAnimationFrame(animate);
        }

        animate();

        // Mouse interaction
        container.addEventListener('mousemove', e => {
            const rect = container.getBoundingClientRect();
            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;

            particles.forEach(particle => {
                const dx = mouseX - particle.x;
                const dy = mouseY - particle.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 100) {
                    const force = (100 - distance) / 100;
                    particle.vx += (dx / distance) * force * 0.05;
                    particle.vy += (dy / distance) * force * 0.05;

                    // Limit velocity
                    const speed = Math.sqrt(
                        particle.vx * particle.vx + particle.vy * particle.vy
                    );
                    if (speed > 2) {
                        particle.vx = (particle.vx / speed) * 2;
                        particle.vy = (particle.vy / speed) * 2;
                    }
                }
            });
        });
    }

    // Flow Field Pattern
    function initFlowField() {
        const container = document.getElementById('flowField');
        if (!container) {
            return;
        }

        const particleCount = 50;
        const particles = [];

        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'flow-particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';

            const duration = 10 + Math.random() * 20;
            const delay = Math.random() * 5;

            particle.style.animation = `
                flow-${i} ${duration}s ${delay}s infinite ease-in-out
            `;

            // Create unique animation for each particle
            const keyframes = `
                @keyframes flow-${i} {
                    0%, 100% {
                        transform: translate(0, 0);
                        opacity: 0;
                    }
                    10% {
                        opacity: 0.4;
                    }
                    90% {
                        opacity: 0.4;
                    }
                    25% {
                        transform: translate(${Math.random() * 60 - 30}px, ${Math.random() * 60 - 30}px);
                    }
                    50% {
                        transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px);
                    }
                    75% {
                        transform: translate(${Math.random() * 60 - 30}px, ${Math.random() * 60 - 30}px);
                    }
                }
            `;

            const style = document.createElement('style');
            style.textContent = keyframes;
            document.head.appendChild(style);

            container.appendChild(particle);
            particles.push(particle);
        }
    }

    // Floating Particles Pattern
    function initFloatingParticles() {
        const container = document.getElementById('floatingParticles');
        if (!container) {
            return;
        }

        const particleCount = 30;

        // Create particles
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'floating-particle';

            // Random size
            const sizeRandom = Math.random();
            if (sizeRandom < 0.3) {
                particle.classList.add('small');
            } else if (sizeRandom > 0.7) {
                particle.classList.add('large');
            } else {
                particle.classList.add('medium');
            }

            // Random speed
            const speedRandom = Math.random();
            if (speedRandom < 0.3) {
                particle.classList.add('slow');
            } else if (speedRandom > 0.7) {
                particle.classList.add('fast');
            }

            // Random position
            particle.style.left = Math.random() * 100 + '%';

            // Random color (some secondary)
            if (Math.random() > 0.7) {
                particle.classList.add('secondary');
            }

            // Start at different animation points
            const animationDuration = particle.classList.contains('slow')
                ? 30
                : particle.classList.contains('fast')
                  ? 15
                  : 20;
            const randomOffset = Math.random() * animationDuration;
            particle.style.animationDelay = `-${randomOffset}s`;

            container.appendChild(particle);
        }
    }

    // Initialize all patterns
    initMovingCircles();
    initInteractiveParticles();
    initFlowField();
    initFloatingParticles();

    // Reinitialize on window resize
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            // Clear and reinitialize patterns
            const movingCircles = document.getElementById('movingCircles');
            const particlesContainer =
                document.getElementById('particlesContainer');
            const flowField = document.getElementById('flowField');
            const floatingParticles =
                document.getElementById('floatingParticles');

            if (movingCircles) {
                movingCircles.innerHTML = '';
            }
            if (particlesContainer) {
                particlesContainer.innerHTML = '';
            }
            if (flowField) {
                flowField.innerHTML = '';
            }
            if (floatingParticles) {
                floatingParticles.innerHTML = '';
            }

            initMovingCircles();
            initInteractiveParticles();
            initFlowField();
            initFloatingParticles();
        }, 250);
    });
});
