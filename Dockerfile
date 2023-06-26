FROM node:18-alpine AS base

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY . .

FROM base AS production

# ENV NODE_PATH=./dist

RUN npm run build