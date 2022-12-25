#!/bin/sh
PORT=8108
docker ps --format="{{.ID}}\t{{.Ports}}" | grep $PORT | awk '{print $1}' | xargs docker container rm -f
yarn run typesenseServer & > /dev/null
sleep 60
yarn run populateTypesenseIndex
yarn start