# JavaScript Pattern Code Snippets

This document contains the JavaScript code for the animated patterns used in the ITM Group Style Guide.

## Moving Circles Pattern

```javascript
// Creates floating circles with smooth animation
function initMovingCircles() {
    const container = document.getElementById('movingCircles');
    const colors = ['#F27252', '#621039', '#2CBBAF'];
    
    for (let i = 0; i < 5; i++) {
        const circle = document.createElement('div');
        circle.className = 'moving-circle';
        const size = Math.random() * 30 + 20;
        circle.style.width = size + 'px';
        circle.style.height = size + 'px';
        circle.style.background = colors[Math.floor(Math.random() * colors.length)];
        circle.style.left = Math.random() * 80 + 10 + '%';
        circle.style.top = Math.random() * 80 + 10 + '%';
        circle.style.animationDelay = Math.random() * 5 + 's';
        circle.style.animationDuration = (15 + Math.random() * 10) + 's';
        container.appendChild(circle);
    }
}
```

CSS for moving circles:
```css
.moving-circle {
    position: absolute;
    border-radius: 50%;
    opacity: 0.1;
    animation: float-circle 20s infinite ease-in-out;
}

@keyframes float-circle {
    0%, 100% {
        transform: translate(0, 0) scale(1);
    }
    25% {
        transform: translate(30px, -20px) scale(1.1);
    }
    50% {
        transform: translate(-20px, 30px) scale(0.9);
    }
    75% {
        transform: translate(40px, 20px) scale(1.05);
    }
}
```

## Interactive Particles Pattern

```javascript
// Creates particles that connect with lines and respond to mouse movement
function initInteractiveParticles() {
    const container = document.getElementById('particlesContainer');
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
                    line.style.opacity = (1 - distance / connectionDistance) * 0.3;
                    
                    container.appendChild(line);
                    lines.push(line);
                }
            }
        }
        
        requestAnimationFrame(animate);
    }
    
    animate();
    
    // Mouse interaction
    container.addEventListener('mousemove', (e) => {
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
                const speed = Math.sqrt(particle.vx * particle.vx + particle.vy * particle.vy);
                if (speed > 2) {
                    particle.vx = (particle.vx / speed) * 2;
                    particle.vy = (particle.vy / speed) * 2;
                }
            }
        });
    });
}
```

CSS for particles:
```css
.particle {
    position: absolute;
    width: 4px;
    height: 4px;
    background: var(--color-primary);
    border-radius: 50%;
    opacity: 0.5;
}

.particle-line {
    position: absolute;
    background: var(--color-primary);
    height: 1px;
    opacity: 0.2;
    transform-origin: left center;
}
```

## Flow Field Pattern

```javascript
// Creates organic flowing particle animation
function initFlowField() {
    const container = document.getElementById('flowField');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'flow-particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        
        const duration = 10 + Math.random() * 20;
        const delay = Math.random() * 5;
        
        particle.style.animation = `flow-${i} ${duration}s ${delay}s infinite ease-in-out`;
        
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
    }
}
```

CSS for flow field:
```css
.flow-particle {
    position: absolute;
    width: 2px;
    height: 2px;
    background: var(--color-secondary);
    border-radius: 50%;
    opacity: 0.4;
}
```

## Usage in Your Project

1. **Include the patterns.js file** in your HTML:
   ```html
   <script src="src/js/patterns.js"></script>
   ```

2. **Create container elements** where you want the patterns:
   ```html
   <div id="movingCircles" class="pattern-container"></div>
   <div id="particlesContainer" class="pattern-container"></div>
   <div id="flowField" class="pattern-container"></div>
   ```

3. **Style the containers** appropriately:
   ```css
   .pattern-container {
       position: relative;
       width: 100%;
       height: 400px;
       overflow: hidden;
       background: #f5f5f5;
   }
   ```

4. **Initialize patterns** when DOM is ready:
   ```javascript
   document.addEventListener('DOMContentLoaded', function() {
       initMovingCircles();
       initInteractiveParticles();
       initFlowField();
   });
   ```

## Performance Considerations

- **Particle Count**: Adjust `particleCount` based on performance needs
- **Connection Distance**: Larger values create more lines but impact performance
- **Animation Duration**: Longer durations are less CPU intensive
- **Viewport Optimization**: Consider pausing animations when not in viewport

## Customization Options

### Colors
Change the color arrays in each function:
```javascript
const colors = ['#F27252', '#621039', '#2CBBAF']; // Your brand colors
```

### Particle Size
Adjust size ranges:
```javascript
const size = Math.random() * 30 + 20; // Min 20px, max 50px
```

### Speed
Modify velocity values:
```javascript
vx: (Math.random() - 0.5) * 0.5, // Adjust multiplier for speed
```

### Density
Change particle counts:
```javascript
const particleCount = 20; // More particles = denser effect
```