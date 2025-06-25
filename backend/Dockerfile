# Stage 1: Build app
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install --omit=dev

RUN npx prisma generate --schema=prisma/schema.prisma

COPY . .
RUN npm run build

# Stage 2: Run app
FROM node:20-alpine

WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./

EXPOSE 3001

CMD ["node", "dist/main"]



# FROM node:18-alpine

# WORKDIR /app

# COPY .env .env
# COPY prisma ./prisma
# COPY package*.json ./
# RUN npm install
# RUN npx prisma generate

# COPY . .
# RUN npm run build



# CMD ["sh", "-c", "npx prisma migrate deploy && node dist/main.js"]
