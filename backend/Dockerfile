# Stage 1: Build
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json tsconfig.json ./

RUN npx prisma generate --schema=prisma/schema.prisma
RUN npm ci

COPY . .

RUN npm run build

# Stage 2: Run
FROM node:18-alpine AS production

WORKDIR /app

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./

RUN npm install --omit=dev

EXPOSE 3001
CMD ["node", "dist/main"]
