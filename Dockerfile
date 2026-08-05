FROM node:26 AS build

WORKDIR /app

ARG DIRECTUS_URL
ARG PUBLIC_SCRUMLR_SERVER_URL

COPY package*.json ./
COPY pnpm-workspace.yaml ./
COPY pnpm-lock.yaml ./

RUN npm install -g pnpm
RUN pnpm install

COPY . .

RUN --mount=type=secret,id=directus_token,required=true sh -c '\
  DIRECTUS_TOKEN_CLEAN="$(tr -d "\r\n" < /run/secrets/directus_token)" && \
  env \
    DIRECTUS_URL="$DIRECTUS_URL" \
    DIRECTUS_TOKEN="$DIRECTUS_TOKEN_CLEAN" \
    PUBLIC_SCRUMLR_SERVER_URL="$PUBLIC_SCRUMLR_SERVER_URL" \
    pnpm run build \
'

FROM nginx:alpine AS runtime

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 8080