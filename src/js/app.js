// Main application file for ITM Style Guide

document.addEventListener('DOMContentLoaded', function() {
    console.log('ITM Style Guide loaded successfully');
    
    // Add copy functionality to color swatches
    const colorSwatches = document.querySelectorAll('.color-swatch');
    colorSwatches.forEach(swatch => {
        swatch.style.cursor = 'pointer';
        swatch.addEventListener('click', function() {
            const color = window.getComputedStyle(this).backgroundColor;
            const hex = this.parentElement.querySelector('code').textContent;
            
            navigator.clipboard.writeText(hex).then(() => {
                showNotification(`Copied ${hex} to clipboard`);
            });
        });
    });
    
    // Add copy functionality to code blocks
    const codeBlocks = document.querySelectorAll('code');
    codeBlocks.forEach(code => {
        code.style.cursor = 'pointer';
        code.addEventListener('click', function() {
            const text = this.textContent;
            navigator.clipboard.writeText(text).then(() => {
                showNotification(`Copied to clipboard`);
            });
        });
    });
    
    // Notification system
    function showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: var(--color-dark);
            color: white;
            padding: 15px 25px;
            border-radius: 8px;
            box-shadow: var(--shadow-lg);
            opacity: 0;
            transform: translateY(20px);
            transition: all 0.3s ease;
            z-index: var(--z-notification);
        `;
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.opacity = '1';
            notification.style.transform = 'translateY(0)';
        }, 10);
        
        // Animate out and remove
        setTimeout(() => {
            notification.style.opacity = '0';
            notification.style.transform = 'translateY(20px)';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
    
    // Theme toggle (if needed in future)
    function initThemeToggle() {
        const savedTheme = localStorage.getItem('itm-theme') || 'light';
        document.documentElement.setAttribute('data-theme', savedTheme);
    }
    
    // Search functionality (placeholder for future enhancement)
    function initSearch() {
        const searchInput = document.createElement('input');
        searchInput.type = 'search';
        searchInput.placeholder = 'Search style guide...';
        searchInput.className = 'search-input';
        searchInput.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 10px 20px;
            border: 1px solid var(--color-light);
            border-radius: 25px;
            width: 250px;
            font-size: 14px;
            background: white;
            box-shadow: var(--shadow-sm);
            display: none; // Hidden for now
        `;
        
        document.body.appendChild(searchInput);
    }
    
    // Export functionality
    window.exportStyleGuide = function() {
        const styles = {
            colors: {
                primary: '#F27252',
                secondary: '#621039',
                accent: '#2CBBAF',
                dark: '#0a0a0a',
                light: '#EEEEE7',
                white: '#ffffff',
                footer: '#1a1a1a'
            },
            gradients: {
                orangeCard: 'linear-gradient(135deg, #FF8C6B 0%, #F27252 100%)',
                purpleCard: 'linear-gradient(135deg, #B44074 0%, #621039 100%)'
            },
            typography: {
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
                scale: {
                    h1: 'clamp(2rem, 4vw, 3rem)',
                    h2: 'clamp(1.75rem, 3vw, 2.5rem)',
                    h3: 'clamp(1.5rem, 2.5vw, 2rem)',
                    body: '1rem'
                }
            },
            spacing: {
                xs: '0.5rem',
                sm: '0.75rem',
                md: '1rem',
                lg: '1.5rem',
                xl: '2rem',
                '2xl': '3rem',
                '3xl': '4rem',
                '4xl': '6rem'
            }
        };
        
        const blob = new Blob([JSON.stringify(styles, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'itm-style-guide.json';
        a.click();
        URL.revokeObjectURL(url);
        
        showNotification('Style guide exported successfully');
    };
    
    // Initialize features
    initThemeToggle();
    initSearch();
    
    // Performance monitoring
    if ('PerformanceObserver' in window) {
        const perfObserver = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
                console.log(`${entry.name}: ${entry.duration}ms`);
            }
        });
        perfObserver.observe({ entryTypes: ['paint', 'largest-contentful-paint'] });
    }
    
    // Accessibility improvements
    document.querySelectorAll('[role="button"]').forEach(element => {
        if (!element.hasAttribute('tabindex')) {
            element.setAttribute('tabindex', '0');
        }
        
        element.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                element.click();
            }
        });
    });
    
    // Print styles
    window.addEventListener('beforeprint', () => {
        document.body.classList.add('printing');
    });
    
    window.addEventListener('afterprint', () => {
        document.body.classList.remove('printing');
    });
});