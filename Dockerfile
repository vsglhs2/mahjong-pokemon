FROM node:22 AS build

ENV SRC_PATH ..

WORKDIR /app

COPY $SRC_PATH/package.json /app/
COPY $SRC_PATH/package-lock.json /app/

RUN npm i

COPY $SRC_PATH /app/

RUN npm run build

FROM caddy:2

COPY --from=build /app/dist /srv
COPY Caddyfile /etc/caddy/Caddyfile
