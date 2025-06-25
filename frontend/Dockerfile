# Stage 1: Build static site
FROM node:18-alpine AS builder

WORKDIR /app

# Copy deps and config
COPY package*.json ./
COPY tailwind.config.js postcss.config.mjs next.config.ts ./
RUN npm ci

# Copy source
COPY . .

ARG NEXT_PUBLIC_API_URL
ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL

# Build (tự tạo /out nếu có output: 'export')
RUN npm run build

# Stage 2: Serve static site with nginx
FROM nginx:alpine
COPY --from=builder /app/out /usr/share/nginx/html

COPY public/env.js /usr/share/nginx/html/env.js

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
