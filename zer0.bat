@echo off
cd /d "%~dp0"
start "" miniweb.exe -root "%cd%" -port 5500
timeout /t 2 >nul
start http://localhost:5500/index.htm