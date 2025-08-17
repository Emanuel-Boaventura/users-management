#Build stage
FROM node:20-slim AS build

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build

#Production stage
FROM node:20-slim AS production

WORKDIR /app

COPY package*.json .

RUN npm ci --only=production --ignore-scripts

COPY --from=build /app/dist ./dist

CMD ["node", "dist/src/index.js"]