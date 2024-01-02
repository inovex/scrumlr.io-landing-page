FROM node:18 AS build
WORKDIR /app
ARG DIRECTUS_URL
ARG DIRECTUS_TOKEN
COPY package*.json ./
RUN npm install -g pnpm
RUN pnpm install
COPY . .
RUN echo "DIRECTUS_URL = ${DIRECTUS_URL}" >> .env
RUN echo "DIRECTUS_TOKEN = ${DIRECTUS_TOKEN}" >> .env
RUN pnpm run build
RUN rm -rf .env

FROM nginx:alpine AS runtime
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 8080