FROM node:latest

WORKDIR /opt/raspi-controller-front-app

COPY package*.json ./

RUN npm install
 
COPY . .
 
EXPOSE 4200
 
CMD [ "npm", "start" ]