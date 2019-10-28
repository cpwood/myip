FROM node:12-alpine

WORKDIR /app

COPY package.json .
COPY app.js .

RUN npm i

CMD node app.js
