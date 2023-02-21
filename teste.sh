#!/usr/bin/env sh
docker image rm imrayh/mysite
docker build -t imrayh/mysite .
docker push imrayh/mysite