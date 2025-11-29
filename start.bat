@echo off
REM AR CPU PROJECT STARTUP SCRIPT FOR WINDOWS
REM Membantu memulai development server dengan mudah

echo.
echo ╔════════════════════════════════════════╗
echo ║  AR CPU - Augmented Reality           ║
echo ║  Komponen Komputer 3D Visualization   ║
echo ╚════════════════════════════════════════╝
echo.

REM Check if Python 3 is installed
where python >nul 2>nul
if %ERRORLEVEL% EQU 0 (
    echo ✅ Python found
    echo.
    echo 🚀 Starting development server...
    echo.
    echo Open your browser to: http://localhost:8000
    echo.
    python -m http.server 8000
) else (
    echo ❌ Python not found
    echo.
    echo Please install Python or use alternative:
    echo   • Node.js: npx live-server
    echo   • PHP: php -S localhost:8000
    echo.
    pause
    exit /b 1
)
