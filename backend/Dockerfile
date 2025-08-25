FROM node:24.5.0-alpine AS build

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .
RUN npx --yes esbuild src/index.js --bundle \
  --platform=node --target=node24 \
  --format=esm \
  --outfile=dist/server.js

FROM node:24.5.0-alpine AS production
WORKDIR /app
COPY --from=build /app/dist ./dist

EXPOSE 3000

CMD ["node", "dist/server.js"]
