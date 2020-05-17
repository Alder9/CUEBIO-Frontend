### Build stage ###

FROM node:12.7-alpine as build
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install
RUN npm install -g @angular/cli

COPY . ./

RUN ng build --output-path=dist

FROM nginx:1.16.0-alpine

RUN mkdir -p /run/nginx

RUN rm -rf /usr/share/nginx/html*

# COPY ./certs /etc/nginx/certs

# COPY ./dev/nginx.conf /etc/nginx/nginx.conf

COPY --from=build /usr/src/app/dist /usr/share/nginx/html

EXPOSE 49153 

# CMD /bin/sh -c 'while :; do sleep 6h & wait $${!}; nginx -s reload; done & nginx -g "daemon off;"'

