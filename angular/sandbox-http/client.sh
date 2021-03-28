#!/bin/bash

set -e 

### ensure that MY_API_ROOT is defined as env var

if [ -z ${MY_API_ROOT+x} ]; then 
echo "please set MY_API_ROOT"
exit -1
fi

### ensure option passed on CLI

if [ -z ${1+x} ]; then 
echo "please specify command #"
exit -1
fi

OPTION=$1

### ensure id passed on CLI

if [ -z ${2+x} ]; then 
echo "please specify id, even if bogus placeholder"
exit -1
fi

MY_ID=$2

if [ "$OPTION" == "0" ]; then
echo ""
echo "0 : help"
echo "1 : get all"
echo "2 : get by id"
echo "3 : post new, then get all"
echo "4 : update by id, then get all"
echo "5 : delete by id, then get all"
echo "6 : patch by id, then get all"
echo ""
elif [ "$OPTION" == "1" ]; then
# ----------------- get all
curl ${MY_API_ROOT}.json?print=pretty

elif [ "$OPTION" == "2" ]; then
# ----------------- get one
curl ${MY_API_ROOT}/${MY_ID}.json?print=pretty

elif [ "$OPTION" == "3" ]; then
# ----------------- post one
curl -X POST -d '{"name" : "EVH", "strategy" : "MaxCard"}' ${MY_API_ROOT}.json
echo ""
echo "post OK ... fetching"
curl ${MY_API_ROOT}.json?print=pretty

elif [ "$OPTION" == "4" ]; then
# ----------------- update one
curl -X PUT -d '{ "name": "EVH2", "strategy": "MinCard" }' ${MY_API_ROOT}/${MY_ID}.json
echo ""
echo "put OK ... fetching"
curl ${MY_API_ROOT}.json?print=pretty

elif [ "$OPTION" == "5" ]; then
# ----------------- delete one
curl -X DELETE ${MY_API_ROOT}/${MY_ID}.json
echo ""
echo "delete OK ... fetching"
curl ${MY_API_ROOT}.json?print=pretty

elif [ "$OPTION" == "6" ]; then
# ----------------- update one
curl -X PATCH -d '{"strategy":"NearestCard"}' ${MY_API_ROOT}/${MY_ID}.json
echo ""
echo "patch OK ... fetching"
curl ${MY_API_ROOT}.json?print=pretty
fi 

echo ""
echo "Ready."
