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
echo "please specify id, even if bogus for get-all"
exit -1
fi

MY_ID=$2

if [ "$OPTION" == "1" ]; then
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
fi 


# ----------------- update one
# curl -X PUT -d '{ "name": "Rhoads", "strategy": "MinCard" }' ${MY_API_ROOT}/${ID}.json
