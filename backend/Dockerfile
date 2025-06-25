# Stage 1: Build app
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install --omit=dev
# 2. Copy schema.prisma và prisma directory trước (nếu có)
COPY prisma ./prisma

# 3. Chạy prisma generate
RUN npx prisma generate

# 4. Sau đó mới copy toàn bộ source
COPY . .

# 5. Build NestJS
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
