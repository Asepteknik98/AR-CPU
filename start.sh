#!/bin/bash

# AR CPU PROJECT STARTUP SCRIPT
# Membantu memulai development server dengan mudah

echo "╔════════════════════════════════════════╗"
echo "║  AR CPU - Augmented Reality           ║"
echo "║  Komponen Komputer 3D Visualization   ║"
echo "╚════════════════════════════════════════╝"
echo ""

# Check if Python is installed
if command -v python3 &> /dev/null; then
    echo "✅ Python 3 found"
    echo "🚀 Starting development server on http://localhost:8000"
    echo ""
    python3 -m http.server 8000
elif command -v python &> /dev/null; then
    echo "✅ Python found"
    echo "🚀 Starting development server on http://localhost:8000"
    echo ""
    python -m http.server 8000
else
    echo "❌ Python not found"
    echo ""
    echo "Please install Python or use alternative:"
    echo "  • Node.js: npx live-server"
    echo "  • PHP: php -S localhost:8000"
    echo "  • Ruby: ruby -run -ehttpd . -p8000"
    exit 1
fi
