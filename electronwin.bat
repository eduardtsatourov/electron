#!/bin/bash
docker build -f Dockerfile -t ordina/angular-electron .
docker run --rm -it -v %cd%/build:/usr/app/build -v %cd%/out:/usr/app/out ordina/angular-electron
