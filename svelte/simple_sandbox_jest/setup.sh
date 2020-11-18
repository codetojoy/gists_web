#!/bin/bash

set -e 

# create app (in parent dir) 
# npx degit sveltejs/template homer-svelte

# in this dir 
npm install

npm install -D @babel/core              
npm install -D @babel/preset-env              
npm install -D @testing-library/svelte              
npm install -D babel-jest              
npm install -D jest              
npm install -D svelte-jester
