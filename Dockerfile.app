FROM node:12-alpine

WORKDIR /app

COPY package-lock.json package.json ./

RUN npm ci

COPY . .