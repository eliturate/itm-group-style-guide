// Main application file for ITM Style Guide

document.addEventListener('DOMContentLoaded', function () {
    // Initialize the style guide
    initStyleGuide();

    // Add copy functionality to color swatches
    const colorSwatches = document.querySelectorAll('.color-swatch');
    colorSwatches.forEach(swatch => {
        swatch.style.cursor = 'pointer';
        swatch.addEventListener('click', function () {
            const hex = this.parentElement.querySelector('code').textContent;

            copyToClipboard(hex, `Copied ${hex} to clipboard`);
        });
    });

    // Add copy functionality to code blocks
    const codeBlocks = document.querySelectorAll('code');
    codeBlocks.forEach(code => {
        code.style.cursor = 'pointer';
        code.addEventListener('click', function () {
            const text = this.textContent;
            copyToClipboard(text, 'Copied to clipboard');
        });
    });

    // Enhanced clipboard functionality with error handling
    async function copyToClipboard(text, successMessage) {
        try {
            if (navigator.clipboard && window.isSecureContext) {
                await navigator.clipboard.writeText(text);
                showNotification(successMessage);
            } else {
                // Fallback for older browsers or non-secure contexts
                const textArea = document.createElement('textarea');
                textArea.value = text;
                textArea.style.position = 'fixed';
                textArea.style.left = '-999999px';
                textArea.style.top = '-999999px';
                document.body.appendChild(textArea);
                textArea.focus();
                textArea.select();

                try {
                    document.execCommand('copy');
                    showNotification(successMessage);
                } catch (err) {
                    showNotification('Failed to copy to clipboard', 'error');
                } finally {
                    document.body.removeChild(textArea);
                }
            }
        } catch (err) {
            showNotification('Failed to copy to clipboard', 'error');
        }
    }

    // Enhanced notification system
    function showNotification(message, type = 'success') {
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        const bgColor = type === 'error' ? '#dc3545' : 'var(--color-dark)';
        notification.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: ${bgColor};
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

    // Color contrast validation for accessibility
    function validateColorContrast() {
        const colorPairs = [
            { bg: '#F27252', fg: '#FFFFFF', name: 'Coral on White' },
            { bg: '#621039', fg: '#FFFFFF', name: 'Purple on White' },
            { bg: '#2CBBAF', fg: '#FFFFFF', name: 'Teal on White' },
            { bg: '#0a0a0a', fg: '#FFFFFF', name: 'Dark on White' },
            { bg: '#EEEEE7', fg: '#0a0a0a', name: 'Light on Dark' },
            { bg: '#F27252', fg: '#0a0a0a', name: 'Coral on Dark' },
            { bg: '#621039', fg: '#EEEEE7', name: 'Purple on Light' }
        ];

        function calculateContrastRatio(l1, l2) {
            const lighter = Math.max(l1, l2);
            const darker = Math.min(l1, l2);
            return (lighter + 0.05) / (darker + 0.05);
        }

        function getLuminance(r, g, b) {
            const [rs, gs, bs] = [r, g, b].map(c => {
                c = c / 255;
                return c <= 0.03928
                    ? c / 12.92
                    : Math.pow((c + 0.055) / 1.055, 2.4);
            });
            return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
        }

        function hexToRgb(hex) {
            const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(
                hex
            );
            return result
                ? {
                      r: parseInt(result[1], 16),
                      g: parseInt(result[2], 16),
                      b: parseInt(result[3], 16)
                  }
                : null;
        }

        const results = colorPairs.map(pair => {
            const bgRgb = hexToRgb(pair.bg);
            const fgRgb = hexToRgb(pair.fg);

            if (!bgRgb || !fgRgb) {
                return { name: pair.name, valid: false, ratio: 0 };
            }

            const bgLuminance = getLuminance(bgRgb.r, bgRgb.g, bgRgb.b);
            const fgLuminance = getLuminance(fgRgb.r, fgRgb.g, fgRgb.b);
            const ratio = calculateContrastRatio(bgLuminance, fgLuminance);

            return {
                name: pair.name,
                valid: ratio >= 4.5, // WCAG AA standard for normal text
                ratio: Math.round(ratio * 100) / 100
            };
        });

        // Log results only in development
        if (
            typeof process !== 'undefined' &&
            process.env.NODE_ENV === 'development'
        ) {
            console.group('Color Contrast Validation');
            results.forEach(result => {
                const status = result.valid ? '✅' : '❌';
                console.log(`${status} ${result.name}: ${result.ratio}:1`);
            });
            console.groupEnd();
        }

        return results;
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
    window.exportStyleGuide = function () {
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
                fontFamily:
                    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
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

        const blob = new Blob([JSON.stringify(styles, null, 2)], {
            type: 'application/json'
        });
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

    // Initialize the style guide
    function initStyleGuide() {
        // Log initialization only in development
        if (
            typeof process !== 'undefined' &&
            process.env.NODE_ENV === 'development'
        ) {
            console.log('ITM Style Guide loaded successfully');
        }

        // Validate color contrast for accessibility
        validateColorContrast();

        // Register service worker for offline capabilities
        registerServiceWorker();
    }

    // Register service worker
    async function registerServiceWorker() {
        if ('serviceWorker' in navigator) {
            try {
                const registration =
                    await navigator.serviceWorker.register('/sw.js');
                if (
                    typeof process !== 'undefined' &&
                    process.env.NODE_ENV === 'development'
                ) {
                    console.log(
                        'Service Worker registered successfully:',
                        registration
                    );
                }
            } catch (error) {
                console.error('Service Worker registration failed:', error);
            }
        }
    }

    // Performance monitoring
    if ('PerformanceObserver' in window) {
        const perfObserver = new PerformanceObserver(list => {
            for (const entry of list.getEntries()) {
                // Log performance metrics only in development
                if (process.env.NODE_ENV === 'development') {
                    console.log(`${entry.name}: ${entry.duration}ms`);
                }
            }
        });
        perfObserver.observe({
            entryTypes: ['paint', 'largest-contentful-paint']
        });
    }

    // Accessibility improvements
    document.querySelectorAll('[role="button"]').forEach(element => {
        if (!element.hasAttribute('tabindex')) {
            element.setAttribute('tabindex', '0');
        }

        element.addEventListener('keydown', e => {
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
