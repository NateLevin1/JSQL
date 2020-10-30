echo 'export default `' > typings.ts
cat ../../../lib/table/table.ts > tmp.txt
sed -i '' 's/`/\\`/g' tmp.txt
sed -i '' 's/\${/\\\${/g' tmp.txt
sed -i '' 's/export default //g' tmp.txt
sed -i '' '/^import/d' tmp.txt
cat tmp.txt >> typings.ts
rm tmp.txt
echo "Added typings succesfully\n"
echo '`' >> typings.ts