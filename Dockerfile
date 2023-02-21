FROM node:18

WORKDIR  /app

COPY  . .

EXPOSE 3000

RUN npm run build

ENTRYPOINT ["npm", "run", "start"]