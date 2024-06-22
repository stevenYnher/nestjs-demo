# Etapa de construcción
FROM --platform=linux/amd64 node:current-alpine as builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN chmod +x /usr/local/bin/docker-entrypoint.sh
EXPOSE 3002

CMD ["npm", "start"] 
