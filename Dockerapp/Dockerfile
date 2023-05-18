



# PASO 1
FROM node:14 AS build-env
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# PASO 2

FROM nginx:1.24.0-alpine
COPY --from=build-env /app/dist/tienda-zapatos /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
CMD ["nginx", "-g", "daemon off;"]


