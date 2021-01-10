FROM node

WORKDIR /usr/app
COPY ./package.json ./
COPY ./package-lock.json ./
RUN dpkg --add-architecture i386 && apt-get update && apt-get install wine wine32 wine64 -y
RUN npm install
COPY ./ ./

CMD [ "npm", "run", "electron:build" ]

# FROM node

# RUN dpkg --add-architecture i386 && apt-get update && apt-get install wine wine32 wine64 -y

# RUN npm install electron-packager -g

# VOLUME /root/.electron

# # make more efficient by copying only needed files
# COPY . /electron
# VOLUME /electron
# WORKDIR /electron

# CMD [""]

# ENTRYPOINT ["electron-packager"]
