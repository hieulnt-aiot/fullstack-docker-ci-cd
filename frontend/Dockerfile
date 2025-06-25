# Stage 1: Build static site
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci --omit=dev

COPY . .
RUN npm run build && npm run export

# Stage 2: Serve with nginx
FROM nginx:alpine

COPY --from=builder /app/out /usr/share/nginx/html

# Optional: Custom nginx config
# COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

# # Stage 1: Build the app
# FROM node:18-alpine AS builder
# WORKDIR /app

# # Copy deps and install
# COPY package*.json ./
# RUN npm install

# # Copy everything else
# COPY . .

# # 👇 Ensure .env.local is copied before build
# COPY .env.local .env.local

# # Build the frontend with env vars injected
# RUN npm run build

# # Stage 2: Run the app
# FROM node:18-alpine
# WORKDIR /app

# # Copy from build stage
# COPY --from=builder /app ./

# # Install only production deps
# RUN npm install --production

# EXPOSE 3000
# CMD ["npm", "start"]
