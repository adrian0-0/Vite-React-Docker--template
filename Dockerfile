FROM node:14-alpine 
RUN apk update
RUN apk add bash
WORKDIR /usr/src/app
COPY package.json ./
COPY . .

ENV PORT=8080

EXPOSE 8080

CMD ["sh", "-c", "yarn install && yarn dev"]