// Icons loader for ITM Style Guide

document.addEventListener('DOMContentLoaded', function() {
    const iconGrid = document.getElementById('iconGrid');
    if (!iconGrid) return;
    
    // Icon categories
    const iconCategories = {
        service: {
            title: 'Service Icons',
            style: 'circle',
            icons: [
                {
                    name: 'Strategic Vision',
                    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                        <path d="M12 5v14m0-14l-2 2m2-2l2 2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>`
                },
                {
                    name: 'Tailored Solutions',
                    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                        <circle cx="12" cy="12" r="2"/>
                        <path d="M12 6V4m0 16v-2m6-6h2M4 12h2m11.314-5.314l1.414-1.414M6.686 18.728l1.414-1.414m10.628 1.414l-1.414-1.414M7.272 6.686L5.858 5.272"/>
                    </svg>`
                },
                {
                    name: 'Proven Results',
                    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                        <path d="M9 12l2 2 4-4" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>`
                },
                {
                    name: 'Continuous Growth',
                    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                        <path d="M12 12c0-3.314 2.686-6 6-6M12 12c0 3.314-2.686 6-6 6m6-6c0 3.314 2.686 6 6 6m-6-6c0-3.314-2.686-6-6-6" stroke-linecap="round"/>
                    </svg>`
                }
            ]
        },
        feature: {
            title: 'Feature Icons',
            style: 'square',
            icons: [
                {
                    name: 'Quality Assurance',
                    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                        <path d="M9 12l2 2 4-4m1 7H8a2 2 0 01-2-2V9a2 2 0 012-2h8a2 2 0 012 2v6a2 2 0 01-2 2z" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>`
                },
                {
                    name: 'Innovation',
                    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                        <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m1.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>`
                },
                {
                    name: 'Analytics',
                    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                        <path d="M9 19v-6m3 6V9m3 10v-4" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>`
                },
                {
                    name: 'Time Efficiency',
                    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                        <circle cx="12" cy="12" r="9"/>
                        <path d="M12 7v5l3 3" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>`
                }
            ]
        },
        utility: {
            title: 'Utility Icons',
            style: 'square',
            icons: [
                {
                    name: 'Arrow Right',
                    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M9 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>`
                },
                {
                    name: 'Plus',
                    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M12 5v14m-7-7h14" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>`
                },
                {
                    name: 'Close',
                    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M6 6l12 12M6 18L18 6" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>`
                },
                {
                    name: 'Search',
                    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="11" cy="11" r="8"/>
                        <path d="M21 21l-4.35-4.35" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>`
                }
            ]
        },
        additional: {
            title: 'Additional Brand Icons',
            style: 'circle',
            icons: [
                {
                    name: 'Compass',
                    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                        <circle cx="12" cy="12" r="10"/>
                        <path d="M8 12h8m-4-4v8" stroke-linecap="round"/>
                    </svg>`
                },
                {
                    name: 'Shield Check',
                    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                        <path d="M12 2L4 7v6c0 5.55 3.84 10.74 8 12 4.16-1.26 8-6.45 8-12V7l-8-5z"/>
                        <path d="M9 12l2 2 4-4" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>`
                },
                {
                    name: '3D Cube',
                    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                        <path d="M12 2L2 7v10l10 5 10-5V7L12 2z"/>
                        <path d="M12 7v10m0-10L2 7m10 0l10-5M12 17L2 12m10 5l10-5"/>
                    </svg>`
                },
                {
                    name: 'Network',
                    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                        <circle cx="12" cy="12" r="3"/>
                        <circle cx="12" cy="4" r="2"/>
                        <circle cx="20" cy="12" r="2"/>
                        <circle cx="12" cy="20" r="2"/>
                        <circle cx="4" cy="12" r="2"/>
                        <path d="M12 6v3m5.2 1.8l-2.6-1.5M15 12h3M12 15v3m-5.2-1.8l2.6-1.5M6 12h3"/>
                    </svg>`
                },
                {
                    name: 'Grid System',
                    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                        <rect x="3" y="3" width="7" height="7"/>
                        <rect x="14" y="3" width="7" height="7"/>
                        <rect x="14" y="14" width="7" height="7"/>
                        <rect x="3" y="14" width="7" height="7"/>
                    </svg>`
                }
            ]
        },
        whiteBg: {
            title: 'White Background Icons',
            style: 'square',
            whiteBackground: true,
            icons: [
                {
                    name: 'Globe Grid',
                    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                        <circle cx="12" cy="12" r="9"/>
                        <path d="M3 12h18M12 3v18"/>
                        <ellipse cx="12" cy="12" rx="9" ry="4"/>
                        <ellipse cx="12" cy="12" rx="4" ry="9"/>
                    </svg>`
                },
                {
                    name: 'Layers',
                    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                        <path d="M12 2L2 7l10 5 10-5L12 2z"/>
                        <path d="M2 12l10 5 10-5M2 17l10 5 10-5"/>
                    </svg>`
                },
                {
                    name: 'Sparkle',
                    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                        <path d="M12 2v6m0 4v6m-4-8h6M6 12h6m5-7l-3 3m3 3l-3-3m3 9l-3-3m3-3l-3 3M7 5L4 8m3-3L4 8m3 9l-3 3m3-3l-3 3m13-3l3 3m-3-3l3 3"/>
                    </svg>`
                },
                {
                    name: 'Pulse',
                    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                        <path d="M3 12h4l3-9 4 18 3-9h4" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>`
                },
                {
                    name: 'Framework',
                    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                        <rect x="4" y="4" width="16" height="16"/>
                        <path d="M9 4v16M15 4v16M4 9h16M4 15h16"/>
                    </svg>`
                }
            ]
        }
    };
    
    // Clear existing content
    iconGrid.innerHTML = '';
    
    // Create sections for each category
    Object.entries(iconCategories).forEach(([key, category]) => {
        const section = document.createElement('div');
        section.className = 'icon-category';
        section.innerHTML = `<h3>${category.title}</h3>`;
        
        const grid = document.createElement('div');
        grid.className = 'icon-grid';
        
        category.icons.forEach(icon => {
            const iconItem = createIconItem(icon, key);
            grid.appendChild(iconItem);
        });
        
        section.appendChild(grid);
        iconGrid.appendChild(section);
    });
    
    // Function to create icon item
    function createIconItem(icon, category) {
        const iconItem = document.createElement('div');
        iconItem.className = 'icon-item';
        
        // Apply specific styling based on category or icon style
        const style = icon.style || iconCategories[category].style;
        if (style === 'circle') {
            iconItem.classList.add('icon-circle');
        } else if (style === 'square') {
            iconItem.classList.add('icon-square');
        }
        
        // Apply white background for white background category
        if (iconCategories[category].whiteBackground) {
            iconItem.classList.add('icon-white-bg');
        }
        
        const iconWrapper = document.createElement('div');
        iconWrapper.className = 'icon-wrapper';
        iconWrapper.innerHTML = icon.svg;
        
        const iconName = document.createElement('span');
        iconName.textContent = icon.name;
        
        iconItem.appendChild(iconWrapper);
        iconItem.appendChild(iconName);
        
        // Copy to clipboard functionality
        iconItem.addEventListener('click', function() {
            navigator.clipboard.writeText(icon.svg).then(() => {
                // Visual feedback
                iconItem.classList.add('copied');
                setTimeout(() => iconItem.classList.remove('copied'), 200);
                
                // Show tooltip
                showTooltip(iconItem, 'Copied!');
            });
        });
        
        return iconItem;
    }
    
    // Tooltip function
    function showTooltip(element, text) {
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.textContent = text;
        tooltip.style.cssText = `
            position: absolute;
            background: #333;
            color: white;
            padding: 5px 10px;
            border-radius: 4px;
            font-size: 12px;
            bottom: 100%;
            left: 50%;
            transform: translateX(-50%) translateY(-5px);
            white-space: nowrap;
            pointer-events: none;
            opacity: 0;
            transition: opacity 0.2s;
            z-index: 1000;
        `;
        
        element.style.position = 'relative';
        element.appendChild(tooltip);
        
        setTimeout(() => tooltip.style.opacity = '1', 10);
        
        setTimeout(() => {
            tooltip.style.opacity = '0';
            setTimeout(() => tooltip.remove(), 200);
        }, 1500);
    }
});