# syntax=docker/dockerfile:1
FROM node:18 as node
WORKDIR /app
COPY . .
RUN npm install
CMD ["npm", "start"]
