# ITM Group Brand Style Guide

A comprehensive, interactive style guide for ITM Group's brand identity, built as a standalone Single Page Application (SPA).

## Overview

This style guide serves as the single source of truth for ITM Group's visual identity, including:
- Brand colors and gradients
- Typography system
- UI components (buttons, badges, etc.)
- Patterns and backgrounds
- Icons and logos
- Digital asset templates

## Features

- **Interactive Components**: Live examples of all UI elements
- **Copy-to-Clipboard**: Click any color, code snippet, or icon to copy
- **Responsive Design**: Works seamlessly on all devices
- **Pattern Animations**: Dynamic, animated background patterns
- **No Dependencies**: Pure HTML, CSS, and JavaScript

## Quick Start

### Local Development

1. Clone this repository:
   ```bash
   git clone https://github.com/[your-username]/itm-group-style-guide.git
   cd itm-group-style-guide
   ```

2. Open `index.html` in your browser or serve with any static file server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx http-server
   
   # Using PHP
   php -S localhost:8000
   ```

3. Navigate to `http://localhost:8000`

### Deployment

The style guide can be deployed to any static hosting service:
- GitHub Pages
- Netlify
- Vercel
- AWS S3
- Any web server

Simply upload all files maintaining the directory structure.

## Project Structure

```
itm-group-style-guide/
├── index.html              # Main HTML file
├── src/
│   ├── css/
│   │   ├── reset.css      # CSS reset/normalize
│   │   ├── variables.css  # CSS custom properties
│   │   ├── style-guide.css # Main styles
│   │   └── animations.css # Pattern animations
│   ├── js/
│   │   ├── navigation.js  # Navigation functionality
│   │   ├── patterns.js    # Animated patterns
│   │   ├── icons.js       # Icon loader
│   │   └── app.js         # Main application
│   └── assets/
│       └── images/
│           └── logos/     # ITM logo variations
└── README.md
```

## Brand Guidelines

### Colors

#### Primary Colors
- **Coral**: `#F27252` - Primary brand color
- **Deep Purple**: `#621039` - Secondary brand color
- **Teal**: `#2CBBAF` - Accent color

#### Neutral Colors
- **Dark**: `#0a0a0a` - Primary text
- **Light**: `#EEEEE7` - Background
- **White**: `#FFFFFF` - Pure white
- **Footer**: `#1a1a1a` - Footer background

#### Gradients
- **Orange Card**: `linear-gradient(135deg, #FF8C6B 0%, #F27252 100%)`
- **Purple Card**: `linear-gradient(135deg, #B44074 0%, #621039 100%)`

### Typography

- **Font Family**: System font stack for optimal performance
- **Headings**: Responsive sizing using `clamp()`
  - H1: `clamp(2rem, 4vw, 3rem)`
  - H2: `clamp(1.75rem, 3vw, 2.5rem)`
  - H3: `clamp(1.5rem, 2.5vw, 2rem)`
- **Body**: `1rem` with `1.6` line height

### Components

#### Buttons
- Primary (Coral background)
- Secondary (Purple background)
- Outline (Coral border)
- Large variants
- Hero button with slide animation

#### Patterns
1. **Hexagon**: Honeycomb pattern
2. **Circuit**: Tech-inspired circuit board
3. **Mesh**: Flowing wavy grid
4. **Waves**: Animated wave lines
5. **Dots**: Multi-color dot grid
6. **Moving Circles**: Floating animated circles
7. **Interactive Particles**: Mouse-responsive particle system
8. **Flow Field**: Organic particle flow

### Icons

15 custom brand icons included:
- Strategy, Analytics, Growth, Innovation
- Team, Security, Cloud, Data
- Integration, Automation, Performance
- Optimization, Insights, Support, Partnership

Click any icon to copy its SVG code.

### Logos

Complete set of ITM logo variations:
- Basic: Dark, White, Orange, Purple
- Horizontal: Default, Dark, White, Orange, Purple
- Vertical: Default, Dark, Orange, Purple
- Globe variants

## Usage Examples

### Using Colors in CSS
```css
.element {
    background: var(--color-primary);
    color: var(--color-white);
}
```

### Implementing Buttons
```html
<button class="btn btn-primary">Primary Button</button>
<button class="btn btn-secondary">Secondary Button</button>
<button class="btn btn-outline">Outline Button</button>
```

### Adding Patterns
```html
<div class="pattern-hexagon"></div>
<div class="pattern-waves"></div>
```

### Using Icons
```javascript
// Icons are provided as SVG strings
// Copy from the style guide and paste into your code
```

## Customization

### Adding New Colors
1. Add to `src/css/variables.css`:
   ```css
   --color-new: #hexcode;
   ```
2. Create swatch in `index.html`

### Creating New Patterns
1. Define pattern in `src/css/animations.css`
2. Add preview div in patterns section
3. Initialize animation in `src/js/patterns.js`

### Adding Icons
1. Add SVG definition to `icons` array in `src/js/icons.js`
2. Icons will automatically appear in the grid

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Performance

- Lightweight: < 100KB total
- No external dependencies
- Optimized animations using CSS transforms
- Efficient JavaScript patterns

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test across browsers
5. Submit a pull request

## License

© 2024 ITM Group. All rights reserved.

---

For questions or support, contact the ITM Group design team.