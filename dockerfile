# Etapa de construcción
FROM node:current-alpine as builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .

EXPOSE 3002

CMD ["npm", "start"] 
