@echo off
setlocal

cd /d "%~dp0"

echo.
echo Installazione dipendenze progetto Biagio Destino Immobiliare
echo Cartella: %CD%
echo.

where npm.cmd >nul 2>nul
if errorlevel 1 (
  echo ERRORE: npm non trovato. Installa Node.js e riprova.
  pause
  exit /b 1
)

set "NPM_CONFIG_CACHE=%CD%\.npm-cache"

echo Uso cache locale: %NPM_CONFIG_CACHE%
echo.
echo Avvio npm install...
call npm.cmd install --cache "%NPM_CONFIG_CACHE%"
if errorlevel 1 (
  echo.
  echo ERRORE: npm install non riuscito.
  pause
  exit /b 1
)

echo.
echo Dipendenze installate. Avvio typecheck...
call npm.cmd run typecheck
if errorlevel 1 (
  echo.
  echo ERRORE: typecheck non riuscito.
  pause
  exit /b 1
)

echo.
echo Typecheck OK. Avvio build...
call npm.cmd run build
if errorlevel 1 (
  echo.
  echo ERRORE: build non riuscita.
  pause
  exit /b 1
)

echo.
echo Tutto OK: dipendenze installate, typecheck e build completati.
pause
