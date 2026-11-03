# Project setup for Windows. Run from the project folder:
#   powershell -ExecutionPolicy Bypass -File setup.ps1
$ErrorActionPreference = "Stop"

if (-not (Get-Command node -ErrorAction SilentlyContinue)) {
  throw "Node.js is missing. Install the LTS version from https://nodejs.org then run this script again."
}
Write-Host "Node $(node -v)"

if (-not (Get-Command pnpm -ErrorAction SilentlyContinue)) {
  Write-Host "Installing pnpm..."
  npm install -g pnpm@10
}

pnpm install

if (-not (Test-Path "apps/web/.env")) {
  Copy-Item "apps/web/.env.example" "apps/web/.env"
}

if ((Get-Command git -ErrorAction SilentlyContinue) -and -not (Test-Path ".git")) {
  git init -b main
}

pnpm typecheck
pnpm test

Write-Host ""
Write-Host "Ready. Start the site with: pnpm dev"
