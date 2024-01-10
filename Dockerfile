FROM node:lts AS runtime
WORKDIR /app

COPY . .

ARG DATABASE_URL=${DATABASE_URL}
ENV DB_URL=${DATABASE_URL}

RUN npm install
RUN npm run build

RUN npm run migrate:deploy

ENV HOST=0.0.0.0
ENV PORT=4321
EXPOSE 4321
CMD node ./dist/server/entry.mjs