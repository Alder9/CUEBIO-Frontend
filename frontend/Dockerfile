FROM node:12.2.0 as build

ENV PATH /node_modules/.bin:$PATH

COPY package.json ./
RUN npm install
RUN npm install -g @angular/cli

COPY . ./

RUN ng build --output-path=dist

FROM nginx:1.16.0-alpine

COPY --from=build /dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]