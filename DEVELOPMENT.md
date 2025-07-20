# Development Guide - ITM Group Style Guide

## Getting Started

### Prerequisites
- Node.js >= 14.0.0
- npm or yarn

### Installation
```bash
# Install dependencies
npm install

# Start development server
npm start
```

## Development Scripts

### Code Quality
```bash
# Lint JavaScript files
npm run lint

# Fix linting issues automatically
npm run lint:fix

# Format code with Prettier
npm run format

# Check code formatting
npm run check-format

# Run all validation checks
npm run validate
```

### Development Server
```bash
# Start with Node.js http-server
npm start

# Start with Python server
npm run serve

# Start with PHP server
npm run serve-php
```

## Code Standards

### JavaScript
- Use ES6+ features
- Prefer `const` and `let` over `var`
- Use single quotes for strings
- Use 4 spaces for indentation
- Always use semicolons
- Use strict equality (`===`)

### CSS
- Use CSS custom properties for design tokens
- Follow BEM methodology for class naming
- Use relative units (rem, em, %) when possible
- Group related properties together

### HTML
- Use semantic HTML elements
- Include proper ARIA attributes
- Ensure proper heading hierarchy
- Use descriptive alt text for images

## File Structure

```
├── index.html              # Main HTML file
├── manifest.json           # PWA manifest
├── sw.js                   # Service worker
├── src/
│   ├── css/
│   │   ├── reset.css      # CSS reset
│   │   ├── variables.css  # Design tokens
│   │   ├── style-guide.css # Main styles
│   │   └── animations.css # Animations
│   ├── js/
│   │   ├── app.js         # Main application
│   │   ├── navigation.js  # Navigation logic
│   │   ├── patterns.js    # Animated patterns
│   │   ├── icons.js       # Icon management
│   │   └── effects.js     # Visual effects
│   └── assets/
│       └── images/
│           └── logos/     # Brand assets
├── .eslintrc.json         # ESLint configuration
├── .prettierrc           # Prettier configuration
└── package.json          # Project configuration
```

## Accessibility Features

### Color Contrast
- All color combinations are validated for WCAG AA compliance
- Contrast ratios are logged in development mode
- Minimum contrast ratio: 4.5:1 for normal text

### Keyboard Navigation
- All interactive elements are keyboard accessible
- Focus indicators are clearly visible
- Tab order follows logical document flow

### Screen Reader Support
- Proper ARIA labels and descriptions
- Semantic HTML structure
- Alt text for all images

## Performance Optimizations

### Loading
- Fonts use `font-display: swap`
- Service worker for offline caching
- Optimized image formats (consider WebP conversion)

### Runtime
- Efficient DOM manipulation
- CSS transforms for animations
- Lazy loading for large sections

## Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Deployment

### Static Hosting
The application can be deployed to any static hosting service:
- GitHub Pages
- Netlify
- Vercel
- AWS S3
- Any web server

### Build Process
Currently, no build process is required. For production optimization, consider:
- Minifying CSS and JavaScript
- Optimizing images
- Adding gzip compression
- Implementing CDN

## Troubleshooting

### Common Issues

1. **Service Worker not registering**
   - Ensure HTTPS or localhost
   - Check browser console for errors

2. **Fonts not loading**
   - Verify internet connection
   - Check Google Fonts availability

3. **Copy to clipboard not working**
   - Ensure secure context (HTTPS)
   - Check browser permissions

### Debug Mode
Set `NODE_ENV=development` to enable:
- Console logging
- Performance monitoring
- Color contrast validation

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run validation: `npm run validate`
5. Test across browsers
6. Submit a pull request

## License

© 2024 ITM Group. All rights reserved.