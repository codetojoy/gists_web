#!/bin/bash

set -e 

npm install 

npm run build

npm run docker:build

npm run docker:run 
