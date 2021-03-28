#!/bin/bash 

set -e

### ensure that MY_API_ROOT is defined as env var

if [ -z ${MY_API_ROOT+x} ]; then 
echo "please set MY_API_ROOT"
exit -1
fi

### replace    ./my_resources/environment.ts 
###         -> ./my_resources/environment.stamped.ts 
### copy    -> ./src/environments/environment.ts

SRC_FILE=./my_resources/environment.ts
STAMPED_FILE=./my_resources/environment.stamped.ts
DEST_FILE=./src/environments/environment.ts 

stat $SRC_FILE > /dev/null 2>&1 

sed "s|MY_API_ROOT|$MY_API_ROOT|" $SRC_FILE > $STAMPED_FILE

rm $DEST_FILE
cp $STAMPED_FILE $DEST_FILE

ng serve

echo "Ready."
