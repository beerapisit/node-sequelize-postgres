FROM node:alpine AS builder

RUN npm install pm2 -g
WORKDIR /apps/
COPY ./package.json ./package.json
RUN npm install
ADD . /apps/
EXPOSE 3000
CMD npm run start