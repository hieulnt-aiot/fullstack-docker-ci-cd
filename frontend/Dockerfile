# Stage 1: Build
FROM node:18-alpine AS builder

WORKDIR /app
COPY package*.json ./
# COPY tailwind.config.js postcss.config.mjs next.config.ts ./
RUN npm ci
COPY . .

RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
