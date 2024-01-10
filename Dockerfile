FROM node:lts AS runtime
WORKDIR /app

COPY . .

ARG DB_URL=${DB_URL}
ENV DB_URL=${DB_URL}

RUN npm install
RUN npm run build

RUN npm run migrate:push

ENV HOST=0.0.0.0
ENV PORT=4321
EXPOSE 4321
CMD node ./dist/server/entry.mjs