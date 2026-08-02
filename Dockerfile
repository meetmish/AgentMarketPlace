# Stage 1: Build the Angular application
FROM node:18 as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --prod

# Stage 2: Serve the application from Nginx
FROM nginx:alpine
COPY --from=build /app/dist/agent-marketplace /usr/share/nginx/html
EXPOSE 8000
