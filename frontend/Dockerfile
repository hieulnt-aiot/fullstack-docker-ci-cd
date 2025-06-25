# Stage 1: Build static site
FROM node:18-alpine AS builder

WORKDIR /app

# Copy and install deps
COPY package*.json ./
COPY postcss.config.js tailwind.config.js ./
RUN npm ci

# Copy source
COPY . .

# Build static site
RUN npm run build && npm run export

# Stage 2: Serve with nginx
FROM nginx:alpine

COPY --from=builder /app/out /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
