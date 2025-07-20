#!/bin/bash

# ITM Group Style Guide Deployment Script
# Version: 1.0.0

set -e  # Exit on any error

echo "🚀 Starting ITM Group Style Guide deployment..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    print_error "Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    print_error "npm is not installed. Please install npm first."
    exit 1
fi

print_status "Node.js version: $(node --version)"
print_status "npm version: $(npm --version)"

# Install dependencies
print_status "Installing dependencies..."
npm install

# Run validation
print_status "Running code validation..."
npm run validate

if [ $? -eq 0 ]; then
    print_success "Code validation passed!"
else
    print_error "Code validation failed. Please fix the issues before deploying."
    exit 1
fi

# Build the project
print_status "Building project..."
npm run build

if [ $? -eq 0 ]; then
    print_success "Build completed successfully!"
else
    print_error "Build failed. Please check the errors above."
    exit 1
fi

# Check if dist directory exists
if [ ! -d "dist" ]; then
    print_error "Dist directory not found. Build may have failed."
    exit 1
fi

print_status "Build output:"
ls -la dist/

# Check file sizes
print_status "Checking file sizes..."
du -sh dist/*

# Test the build locally
print_status "Testing build locally..."
cd dist
python3 -m http.server 8081 &
SERVER_PID=$!

# Wait for server to start
sleep 2

# Test if server is responding
if curl -s http://localhost:8081 > /dev/null; then
    print_success "Local test successful!"
else
    print_error "Local test failed. Server not responding."
    kill $SERVER_PID 2>/dev/null
    exit 1
fi

# Stop test server
kill $SERVER_PID 2>/dev/null

cd ..

# Deployment options
echo ""
print_status "Deployment options:"
echo "1. GitHub Pages (Recommended)"
echo "2. Netlify"
echo "3. Vercel"
echo "4. Manual deployment"
echo "5. Exit"

read -p "Choose deployment option (1-5): " choice

case $choice in
    1)
        print_status "Preparing for GitHub Pages deployment..."
        print_success "Build completed! Ready for GitHub Pages deployment."
        print_status "Next steps:"
        echo "1. Push your code to GitHub:"
        echo "   git add ."
        echo "   git commit -m 'Deploy ITM Group Style Guide v1.0.0'"
        echo "   git push origin main"
        echo ""
        echo "2. Enable GitHub Pages in repository settings:"
        echo "   - Go to Settings > Pages"
        echo "   - Source: Deploy from a branch"
        echo "   - Branch: main, folder: / (root)"
        echo "   - Save"
        ;;
    2)
        print_status "Deploying to Netlify..."
        if command -v netlify &> /dev/null; then
            netlify deploy --prod --dir=dist
        else
            print_warning "Netlify CLI not installed. Installing..."
            npm install -g netlify-cli
            netlify deploy --prod --dir=dist
        fi
        ;;
    3)
        print_status "Deploying to Vercel..."
        if command -v vercel &> /dev/null; then
            vercel --prod
        else
            print_warning "Vercel CLI not installed. Installing..."
            npm install -g vercel
            vercel --prod
        fi
        ;;
    4)
        print_status "Manual deployment instructions:"
        echo ""
        echo "1. Upload the contents of the 'dist' directory to your web server"
        echo "2. Ensure all files maintain their directory structure"
        echo "3. Set proper file permissions (644 for files, 755 for directories)"
        echo "4. Configure your web server to serve index.html for all routes"
        echo "5. Enable HTTPS and gzip compression"
        echo ""
        print_success "Build files are ready in the 'dist' directory"
        ;;
    5)
        print_status "Exiting deployment..."
        exit 0
        ;;
    *)
        print_error "Invalid option. Please choose 1-5."
        exit 1
        ;;
esac

print_success "Deployment process completed!"
print_status "Don't forget to:"
echo "- Test the deployed site"
echo "- Check all functionality"
echo "- Verify mobile responsiveness"
echo "- Test accessibility features"
echo "- Monitor performance"

echo ""
print_success "🎉 ITM Group Style Guide is ready for deployment!"