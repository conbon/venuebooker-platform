FROM node:8.7.0

ENV NPM_CONFIG_LOGLEVEL warn

RUN npm install -g serve
CMD serve -p 8080 -s build
EXPOSE 8080

COPY package.json package.json
RUN npm install

COPY . .

RUN npm run build --production
