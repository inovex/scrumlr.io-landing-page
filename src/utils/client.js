import {createDirectus, rest, staticToken} from '@directus/sdk';

const directusUrl = import.meta.env.DIRECTUS_URL;
const directusToken = import.meta.env.DIRECTUS_TOKEN;

const directusClient = createDirectus(directusUrl)
    .with(staticToken(directusToken))
    .with(rest());

export default directusClient;
