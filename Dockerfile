FROM node:10.15.3

RUN mkdir -p /source/app

WORKDIR /source/app

COPY . /source/app

RUN npm install

EXPOSE 8080

CMD [ "npm", "start" ]