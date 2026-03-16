FROM node:24 AS build
WORKDIR /app

ARG DIRECTUS_URL

COPY package*.json ./
RUN npm install -g pnpm
RUN pnpm install
COPY . .

RUN --mount=type=secret,id=directus_token,required=true sh -c '\
  DIRECTUS_TOKEN_CLEAN="$(tr -d "\r\n" < /run/secrets/directus_token)" && \
  printf "DIRECTUS_URL=%s\n" "$DIRECTUS_URL" > .env && \
  printf "DIRECTUS_TOKEN=%s\n" "$DIRECTUS_TOKEN_CLEAN" >> .env && \
  pnpm run build && \
  rm -f .env \
'

FROM nginx:alpine AS runtime
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 8080