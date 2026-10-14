FROM node:22-alpine

WORKDIR /app

COPY package.json ./
COPY scripts/dev.mjs ./scripts/dev.mjs
COPY worker/index.js ./worker/index.js

ENV NODE_ENV=production HOST=0.0.0.0 PORT=3000
EXPOSE 3000

CMD ["npm", "start"]
