FROM node:slim
WORKDIR /usr/src/app
ENV WELCOME_MESSAGE  "Welcome to Vietnam"
COPY package.json .
RUN npm install
COPY . .
EXPOSE 4000
CMD [ "npm","start" ]

