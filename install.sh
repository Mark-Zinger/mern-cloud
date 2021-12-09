# echo 'Installing Client dependencies...'
# cd client
# npm install
# echo 'Installing Server dependencies...'
# cd ../server
# npm install
# cp config/example.json config/default.json 
# cp config/example.json config/production.json 

printf "Please modify your default.json file to develop \n$(pwd)/server/config/default.json \nOR production.json to production\n$(pwd)/server/config/production.json"
