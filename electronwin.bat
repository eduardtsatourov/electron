#!/bin/bash
docker build -f Dockerfile -t ordina/angular-electron .
docker run --rm -it -v %cd%/dist/jworks-demo-app:/usr/app/dist/jworks-demo-app -v %cd%/out:/usr/app/out ordina/angular-electron
