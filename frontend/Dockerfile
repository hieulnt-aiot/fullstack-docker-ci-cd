# Stage 1: Build
FROM node:18-alpine AS builder

WORKDIR /app
COPY package*.json ./
COPY tailwind.config.js postcss.config.mjs next.config.ts ./
RUN npm ci
COPY . .

ARG NEXT_PUBLIC_API_URL
RUN echo "window.env = { NEXT_PUBLIC_API_URL: '$NEXT_PUBLIC_API_URL' };" > ./public/env.js
RUN npm run build

# Stage 2: Serve
FROM nginx:alpine
COPY --from=builder /app/out /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
