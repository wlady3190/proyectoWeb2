
FROM node:20-alpine

EXPOSE 3000

COPY /src/assets/data/productos.json /opt/productos.json

RUN yarn global add json-server

CMD ["json-server", "-H", "0.0.0.0", "/opt/productos.json"]