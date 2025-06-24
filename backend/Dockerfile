FROM node:18-alpine

WORKDIR /app

COPY .env .env
COPY prisma ./prisma
COPY package*.json ./
RUN npm install
RUN npx prisma generate

COPY . .
RUN npm run build

EXPOSE 3001

CMD ["sh", "-c", "npx prisma migrate deploy && node dist/main.js"]
