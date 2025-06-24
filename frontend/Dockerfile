# Stage 1: Build the app
FROM node:18-alpine AS builder
WORKDIR /app

# Copy deps and install
COPY package*.json ./
RUN npm install

# Copy everything else
COPY . .

# 👇 Ensure .env.local is copied before build
COPY .env.local .env.local

# Build the frontend with env vars injected
RUN npm run build

# Stage 2: Run the app
FROM node:18-alpine
WORKDIR /app

# Copy from build stage
COPY --from=builder /app ./

# Install only production deps
RUN npm install --production

EXPOSE 3000
CMD ["npm", "start"]
