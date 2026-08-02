# Stage 1: Build Angular application
FROM node:22 AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build


# Stage 2: Serve Angular using Nginx
FROM nginx:alpine

# Angular build output is /app/dist/agenthub
COPY --from=build /app/dist/agenthub /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
