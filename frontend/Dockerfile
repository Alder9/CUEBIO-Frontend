### Build stage ###

FROM node:12.7-alpine as build
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install
RUN npm install -g @angular/cli

COPY . ./

RUN ng build --output-path=dist

FROM nginx:1.16.0-alpine

RUN rm -rf /usr/share/nginx/html*

COPY ./dev/nginx.conf /etc/nginx/nginx.conf

COPY --from=build /usr/src/app/dist /usr/share/nginx/html

# EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
