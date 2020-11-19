#!/bin/bash

set -e 

npm run docker:build

npm run docker:run 
