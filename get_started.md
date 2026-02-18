# Run the scrumlr.io Landing Page

This guide explains how to run the landing page locally with `pnpm` or with Docker.

## Prerequisites

- Node.js
- `pnpm`

## Environment variables

Create a `.env` file in the project root:

```dotenv
DIRECTUS_URL=https://your-directus-url
DIRECTUS_TOKEN=your-directus-token
```

These two variables are required because content for sections (for example testimonials) is loaded from Directus.

### `PUBLIC_SCRUMLR_SERVER_URL`

- In the current codebase, this variable is not read by application code.
- It is only used as a Docker/CI build argument.
- For local development, it is optional and usually does not need to be set.

## Run locally with pnpm

```bash
pnpm install
pnpm start
```

The dev server starts with host binding enabled (`astro dev --host`). Open the URL printed in your terminal (usually `http://localhost:4321`).

## Build and preview locally

```bash
pnpm build
pnpm preview
```

## Run with Docker

Build the image:

```bash
docker build \
	--build-arg DIRECTUS_URL="https://your-directus-url" \
	--build-arg DIRECTUS_TOKEN="your-directus-token" \
	-t scrumlr-landing-page .
```

`PUBLIC_SCRUMLR_SERVER_URL` can be provided as an additional `--build-arg`, but it is optional with the current implementation.

Run the container:

```bash
docker run --rm -p 8080:8080 scrumlr-landing-page
```

Then open `http://localhost:8080`.