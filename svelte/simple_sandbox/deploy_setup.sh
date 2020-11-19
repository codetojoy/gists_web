#!/bin/bash

set -e 

npm run build 

mkdir server

cd server

npm init --yes

npm install express

cp ../resources/server.js . 

# node server.js
# OR:
# add this to package.json: "start": "node server.js"
# npm start 

# echo "browse to https://localhost:7170"
