
FROM node:20-alpine

EXPOSE 3000

COPY /src/assets/data/personal.json /opt/personal.json

RUN yarn global add json-server

CMD ["json-server", "-H", "0.0.0.0", "/opt/personal.json"]