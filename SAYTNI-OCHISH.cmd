@echo off
setlocal
cd /d "%~dp0"

set "NPM=C:\Program Files\nodejs\npm.cmd"
set "URL=http://127.0.0.1:4173/uz"

if not exist "%NPM%" (
  echo Node.js topilmadi. Avval Node.js o'rnatilishi kerak.
  pause
  exit /b 1
)

if not exist "node_modules\next\dist\bin\next" (
  echo Sayt uchun kerakli paketlar tayyorlanmoqda...
  call "%NPM%" install --no-package-lock --no-audit --no-fund
  if errorlevel 1 (
    echo Paketlarni o'rnatishda xato yuz berdi.
    pause
    exit /b 1
  )
)

powershell.exe -NoProfile -ExecutionPolicy Bypass -Command "$listener = Get-NetTCPConnection -LocalPort 4173 -State Listen -ErrorAction SilentlyContinue; if (-not $listener) { Start-Process -FilePath '%NPM%' -ArgumentList @('run','dev','--','--hostname','127.0.0.1','--port','4173') -WorkingDirectory '%~dp0' -WindowStyle Hidden }"

powershell.exe -NoProfile -ExecutionPolicy Bypass -Command "$url = '%URL%'; foreach ($attempt in 1..30) { try { Invoke-WebRequest -Uri $url -UseBasicParsing -TimeoutSec 2 | Out-Null; Start-Process $url; exit 0 } catch { Start-Sleep -Seconds 1 } }; Write-Host 'Sayt ishga tushmadi.'; exit 1"
