FROM node

ADD . /app-gateway

WORKDIR /app-gateway

COPY package*.json ./

RUN npm install

EXPOSE 3000

CMD [ "npm", "start" ]