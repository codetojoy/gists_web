#!/bin/bash 

set -e

### ensure that MY_API_URL is defined as env var

if [ -z ${MY_API_URL+x} ]; then 
echo "please set MY_API_URL"
exit -1
fi

### replace    ./my_resources/environment.ts 
###         -> ./my_resources/environment.stamped.ts 
### copy    -> ./src/environments/environment.ts

SRC_FILE=./my_resources/environment.ts
STAMPED_FILE=./my_resources/environment.stamped.ts
DEST_FILE=./src/environments/environment.ts 

sed "s|MY_API_URL|$MY_API_URL|" $SRC_FILE > $STAMPED_FILE

cp $STAMPED_FILE $DEST_FILE

ng serve

echo "Ready."
