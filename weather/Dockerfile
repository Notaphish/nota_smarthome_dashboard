FROM node:14

WORKDIR /app

ADD package.json /app/
ADD package-lock.json /app/

RUN npm install

ADD ./ /app

CMD npm run start