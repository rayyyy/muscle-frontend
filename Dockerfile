FROM node:12.4.0-alpine

# RUN npm install -g @angular/cli

WORKDIR /app
COPY . /app

RUN npm i