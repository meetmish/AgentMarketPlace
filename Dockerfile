# Stage 1: Build Angular application
FROM node:22 AS build

WORKDIR /app

# Copy package files first for better Docker caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy application source code
COPY . .

# Build Angular application
RUN npm run build


# Stage 2: Serve Angular application using Nginx
FROM nginx:alpine

# Copy Angular build output to Nginx
COPY --from=build /app/dist/agent-marketplace /usr/share/nginx/html

# Nginx listens on port 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
