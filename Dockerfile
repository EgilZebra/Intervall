FROM node:18-alpine

WORKDIR /intervall-app/


COPY package.json .

RUN npm install

COPY . .

RUN npm run build

RUN npm install -g http-server

EXPOSE 5173

CMD [ "npm", "run", "dev" ]