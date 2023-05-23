@echo off
rm -r rollback
mkdir rollback
cp -r src rollback
git pull