FROM --platform=linux/arm64 arm64v8/node:18

WORKDIR  /appy

COPY  . .

EXPOSE 3000

RUN npm install

RUN npm run build

ENTRYPOINT ["npm", "run", "start"]