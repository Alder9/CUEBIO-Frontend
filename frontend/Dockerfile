### Build stage ###

FROM node:12.7-alpine as build
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install
RUN npm install -g @angular/cli

COPY . ./

RUN ng build --output-path=dist

FROM nginx:1.16.0-alpine

COPY --from=build /dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]