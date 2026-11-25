@echo off
cd /d "%~dp0"
where py >nul 2>nul && (py -3 kur.py %* & goto son)
where python >nul 2>nul && (python kur.py %* & goto son)
echo Python bulunamadi. https://www.python.org adresinden Python 3 kurup tekrar dene.
:son
pause
