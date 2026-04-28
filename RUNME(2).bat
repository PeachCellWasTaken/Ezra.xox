@echo off
setlocal enabledelayedexpansion

echo.
echo ===============================
echo   Ezra Selfbot Starting
echo ===============================
echo.

if not exist package.json (
    echo Error: package.json not found.
    echo Please make sure you ran RUNME^(1^).bat first.
    pause
    exit /b 1
)

if not exist node_modules (
    echo Error: Dependencies not installed.
    echo Please run RUNME^(1^).bat first to install dependencies.
    pause
    exit /b 1
)

echo Starting bot...
echo.

npm start
