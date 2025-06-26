# Stage 1: Build
FROM node:18-alpine AS builder

WORKDIR /pages
COPY package*.json ./
RUN npm ci
COPY . .

# Inject runtime env (nếu cần)
ARG NEXT_PUBLIC_API_URL
RUN echo "window.env = { NEXT_PUBLIC_API_URL: '$NEXT_PUBLIC_API_URL' };" > ./public/env.js

# Generate static site
RUN npm run build

# Stage 2: Serve with nginx
FROM nginx:alpine

COPY --from=builder /pages/out /usr/share/nginx/html
RUN echo "📁 Show output folder:" && ls -la && ls -la ./pages/out

# Optional: custom nginx.conf (nếu SEO/routing)
# COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
