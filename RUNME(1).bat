@echo off
setlocal enabledelayedexpansion

set language=

:language_select
cls
echo.
echo ===============================
echo   Ezra Selfbot Setup
echo ===============================
echo.
echo Select your language / Selecciona tu idioma:
echo.
echo 1 - Espanol (Spanish)
echo 2 - English
echo.
set /p language="Enter number (1 or 2): "

if "%language%"=="1" goto spanish
if "%language%"=="2" goto english
echo invalid option, try again
goto language_select

:spanish
set lang_installing=instalando
set lang_clean=limpiando dependencias antiguas
set lang_error_pkg=error: package.json no encontrado
set lang_error_run=porfavor corre este script desde el directorio del bot
set lang_check=verificando node.js
set lang_installing_deps=instalando dependencias
set lang_error_npm=error: npm install fallo. asegurarate que node.js 20+ este instalado
set lang_patching=aplicando parches
set lang_success=dependencias instaladas correctamente
goto setup

:english
set lang_installing=Installing
set lang_clean=Cleaning old dependencies...
set lang_error_pkg=Error: package.json not found.
set lang_error_run=Please run this script from the bot directory.
set lang_check=Checking Node.js...
set lang_installing_deps=Installing dependencies...
set lang_error_npm=Error: npm install failed. Make sure Node.js 20+ is installed.
set lang_patching=Applying patches...
set lang_success=Dependencies installed successfully!
goto setup

:setup
cls
echo.
echo ===============================
echo   Ezra Selfbot %lang_installing%
echo ===============================
echo.

if not exist package.json (
    echo %lang_error_pkg%
    echo %lang_error_run%
    pause
    exit /b 1
)

echo %lang_check%
node --version >nul 2>&1
if !errorlevel! neq 0 (
    echo Error: Node.js not found. Please install Node.js 20+
    pause
    exit /b 1
)

if exist node_modules (
    echo %lang_clean%
    rmdir /s /q node_modules >nul 2>&1
    if exist package-lock.json del package-lock.json >nul 2>&1
    echo.
)

echo %lang_installing_deps%
echo.
call npm install
if !errorlevel! neq 0 (
    echo.
    echo %lang_error_npm%
    pause
    exit /b 1
)

echo.
echo %lang_patching%
node scripts/apply-patch.js

echo.
echo %lang_success%
echo.
pause
