@echo off
echo [INFO] Checking for unstaged changes...

REM Check if there are changes (unstaged or staged)
git diff --quiet && git diff --cached --quiet
IF %ERRORLEVEL%==0 (
    echo [INFO] No local changes detected.
    set NEED_STASH=0
) ELSE (
    echo [INFO] Local changes detected – stashing temporarily...
    git stash push -m "pre-commit stash"
    set NEED_STASH=1
)

echo.
echo [INFO] Pulling latest changes from remote...
git pull origin main

IF %NEED_STASH%==1 (
    echo.
    echo [INFO] Restoring your changes from stash...
    git stash pop
)

echo.
echo [READY] You can now add and commit your changes safely.
pause
