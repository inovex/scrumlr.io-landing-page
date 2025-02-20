import {
  createDirectus,
  readFile,
  readItems,
  rest,
  staticToken,
} from "@directus/sdk";

const directusUrl = import.meta.env.DIRECTUS_URL;
const directusToken = import.meta.env.DIRECTUS_TOKEN;

const directusClient = createDirectus(directusUrl)
  .with(staticToken(directusToken))
  .with(rest());

export default async function getTranslatedContent(
  collection: string,
  language: string,
) {
  const content = await directusClient.request<{
    id: string;
    translations: [Record<string, any>];
  }>(
    readItems(collection, {
      deep: {
        translations: {
          _filter: {
            languages_code: {
              _eq: language,
            },
          },
        },
      },
      fields: ["*", "translations.*"],
      limit: 1,
    }),
  );

  return content.translations[0];
}

export async function getContent(collection: string) {
  console.log(directusUrl, directusToken);

  console.log(
    `${directusUrl}/assets/${"cc030b8a-4742-41a6-930a-f2aa65959de2"}`,
  );
  const content = await directusClient.request(
    readItems(collection, {
      fields: ["*.*"],
    }),
  );
  return content;
}
