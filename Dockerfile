FROM node

WORKDIR /usr/app
COPY ./package.json ./
COPY ./package-lock.json ./
RUN dpkg --add-architecture i386 && apt-get update && apt-get install wine wine32 wine64 -y
RUN npm install
COPY ./ ./

CMD [ "npm", "run", "electron:build" ]
