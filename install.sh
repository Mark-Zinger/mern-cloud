echo 'Installing Client dependencies...'
cd client
npm install
echo 'Installing Server dependencies...'
cd ../server
npm install
cp config/example.json config/default.json 
echo 'Please modify your server/config/default.json file'
