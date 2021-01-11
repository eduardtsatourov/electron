#!/bin/bash
docker build -f Dockerfile -t ordina/angular-electron .
docker run --rm -it -v ${PWD}/build:/usr/app/build -v ${PWD}/out:/usr/app/out ordina/angular-electron
