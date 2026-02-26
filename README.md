<p align="center">
 <a href="https://scrumlr.io">
    <img src="scrumlr.png" alt="scrumlr.io" />
  </a>
</p>

<h3 align="center">Online retrospectives made easy</h3>
<p align="center"><a href="https://scrumlr.io">scrumlr.io</a> is an online collaboration tool that helps teams reach new heights. Start your first retrospective or collaborative session in an instant - no registration required and completely free and open source. </p>

---

This repository contains all the source code necessary for the landing page of [scrumlr.io](https://scrumlr.io).

For the full Single Page Application (SPA) of [scrumlr.io](https://scrumlr.io), please refer to the [main repository](https://github.com/inovex/scrumlr.io).

## License

See the [LICENSE](./LICENSE) file for licensing information.

## Get Started

You can run this landing page by either using `pnpm` or Docker. 

In any case, you fist need to create a `.env` file in the project root based on `.env.example` and fill in the required values.

### Run locally with pnpm


```bash
pnpm install
pnpm start
```

### Run with Docker

Build the image:

```bash
docker build \
	--build-arg DIRECTUS_URL="https://your-directus-url" \
	--build-arg DIRECTUS_TOKEN="your-directus-token" \
	-t scrumlr-landing-page .
```

Run the container:

```bash
docker run --rm -p 8080:8080 scrumlr-landing-page
```

Then open [localhost:8080](http://localhost:8080).