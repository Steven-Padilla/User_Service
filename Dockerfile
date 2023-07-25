FROM node:18-alpine AS base

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY ./dist /app/dist/
