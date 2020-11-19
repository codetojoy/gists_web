#!/bin/bash

set -e 

cd server 

node server.js

# OR:
# add this to package.json: "start": "node server.js"
# npm start 

echo "browse to https://localhost:7170"
