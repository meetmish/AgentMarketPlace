# Stage 1: Build the Angular application
FROM node:22 as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --prod

# Stage 2: Serve the application from Nginx
FROM nginx:alpine
# Copy the browser build output contents to Nginx html directory
COPY --from=build /app/dist/agenthub/browser/ /usr/share/nginx/html/
# Copy the custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 8000
