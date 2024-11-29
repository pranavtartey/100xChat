FROM node:20-alpine3.19

WORKDIR /frontend

COPY package*json .

COPY tsconfig.json .

RUN npm install

COPY . .

CMD ["npm","run","dev","--host"]