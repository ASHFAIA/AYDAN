@echo on
rm -r rollback
mkdir rollback
cp -r src rollback
git pull