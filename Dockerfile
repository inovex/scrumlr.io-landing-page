FROM node:24 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install -g pnpm
RUN pnpm install
COPY . .

RUN --mount=type=secret,id=directus_url \
    --mount=type=secret,id=directus_token \
    export DIRECTUS_URL=$(cat /run/secrets/directus_url) && \
    export DIRECTUS_TOKEN=$(cat /run/secrets/directus_token) && \
    pnpm run build

FROM nginx:alpine AS runtime
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 8080