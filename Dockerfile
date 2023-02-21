FROM --platform=linux/arm64 node:18

WORKDIR  /app

COPY  . .

EXPOSE 3000
RUN npm install

RUN npm run build

ENTRYPOINT ["npm", "run", "start"]