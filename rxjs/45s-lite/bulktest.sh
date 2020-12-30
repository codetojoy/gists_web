#!/bin/bash

set -e

# npm install

for i in {1..10}
do
   echo "TRACER i: $i"
   npm test
   sleep 10 
done

