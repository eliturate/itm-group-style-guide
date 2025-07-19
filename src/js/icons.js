// Icons loader for ITM Style Guide

document.addEventListener('DOMContentLoaded', function() {
    const iconGrid = document.getElementById('iconGrid');
    if (!iconGrid) return;
    
    // SVG icon definitions
    const icons = [
        {
            name: 'Strategy',
            svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/>
            </svg>`
        },
        {
            name: 'Analytics',
            svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
            </svg>`
        },
        {
            name: 'Growth',
            svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
            </svg>`
        },
        {
            name: 'Innovation',
            svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m1.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
            </svg>`
        },
        {
            name: 'Team',
            svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
            </svg>`
        },
        {
            name: 'Security',
            svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
            </svg>`
        },
        {
            name: 'Cloud',
            svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"/>
            </svg>`
        },
        {
            name: 'Data',
            svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"/>
            </svg>`
        },
        {
            name: 'Integration',
            svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
            </svg>`
        },
        {
            name: 'Automation',
            svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>`
        },
        {
            name: 'Performance',
            svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
            </svg>`
        },
        {
            name: 'Optimization',
            svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"/>
            </svg>`
        },
        {
            name: 'Insights',
            svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
            </svg>`
        },
        {
            name: 'Support',
            svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"/>
            </svg>`
        },
        {
            name: 'Partnership',
            svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
            </svg>`
        }
    ];
    
    // Create white background icons section
    const whiteBackgroundIcons = icons.slice(10, 15); // Last 5 icons
    const regularIcons = icons.slice(0, 10); // First 10 icons
    
    // Add regular icons
    const regularSection = document.createElement('div');
    regularSection.className = 'icon-section';
    regularSection.innerHTML = '<h3 style="grid-column: 1/-1; margin-bottom: 1rem;">Core Brand Icons</h3>';
    
    regularIcons.forEach(icon => {
        const iconItem = createIconItem(icon, '#F27252');
        regularSection.appendChild(iconItem);
    });
    
    iconGrid.appendChild(regularSection);
    
    // Add white background icons
    const whiteSection = document.createElement('div');
    whiteSection.className = 'icon-section';
    whiteSection.innerHTML = '<h3 style="grid-column: 1/-1; margin-top: 2rem; margin-bottom: 1rem;">Additional Brand Icons</h3>';
    whiteSection.style.marginTop = '2rem';
    
    whiteBackgroundIcons.forEach(icon => {
        const iconItem = createIconItem(icon, '#621039', true);
        whiteSection.appendChild(iconItem);
    });
    
    iconGrid.appendChild(whiteSection);
    
    // Function to create icon item
    function createIconItem(icon, color, whiteBackground = false) {
        const iconItem = document.createElement('div');
        iconItem.className = 'icon-item';
        if (whiteBackground) {
            iconItem.style.background = '#ffffff';
            iconItem.style.border = '1px solid #e0e0e0';
        }
        
        const iconWrapper = document.createElement('div');
        iconWrapper.innerHTML = icon.svg;
        iconWrapper.style.color = color;
        
        const iconName = document.createElement('span');
        iconName.textContent = icon.name;
        
        iconItem.appendChild(iconWrapper);
        iconItem.appendChild(iconName);
        
        // Copy to clipboard functionality
        iconItem.addEventListener('click', function() {
            navigator.clipboard.writeText(icon.svg).then(() => {
                // Visual feedback
                const originalBg = iconItem.style.background;
                iconItem.style.background = 'var(--color-primary)';
                iconItem.style.color = 'white';
                iconWrapper.style.color = 'white';
                iconName.style.color = 'white';
                
                setTimeout(() => {
                    iconItem.style.background = originalBg;
                    iconItem.style.color = '';
                    iconWrapper.style.color = color;
                    iconName.style.color = '';
                }, 200);
                
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