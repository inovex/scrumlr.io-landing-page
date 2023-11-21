import {createDirectus, readItems, rest, staticToken} from '@directus/sdk';

const directusUrl = import.meta.env.DIRECTUS_URL;
const directusToken = import.meta.env.DIRECTUS_TOKEN;

const directusClient = createDirectus(directusUrl)
    .with(staticToken(directusToken))
    .with(rest());

export default async function getTranslatedContent(collection: string, language: string) {
    const content = await directusClient.request<{id: string, translations: [Record<string, any>]}>(readItems(collection, {
        deep: {
            translations: {
                _filter: {
                    languages_code: {
                        _eq: language
                    },
                },
            },
        },
        fields: ['*', 'translations.*'],
        limit: 1
    }));

    return content.translations[0];
}
