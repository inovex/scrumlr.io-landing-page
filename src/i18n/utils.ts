const TEMPORARY_BASE_URL = "https://scrumlr.io";
const ABSOLUTE_URL_PATTERN = /^[a-zA-Z][a-zA-Z\d+.-]*:/;
export const LANGUAGE_QUERY_PARAM = "lng";
export const SUPPORTED_LANGUAGES = {
  en: 'English',
  de: 'German',
  fr: 'French',
};
export const DEFAULT_LANGUAGE: keyof typeof SUPPORTED_LANGUAGES = "en";

export const SUPPORTED_LANGUAGE_CODES = Object.keys(
  SUPPORTED_LANGUAGES,
) as Array<keyof typeof SUPPORTED_LANGUAGES>;

export function detectLanguageFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in SUPPORTED_LANGUAGES) return lang as keyof typeof SUPPORTED_LANGUAGES;
  return DEFAULT_LANGUAGE;
}

export function localizePath(lang: keyof typeof SUPPORTED_LANGUAGES, path: string) {
  if (path.startsWith("#")) {
    return lang === DEFAULT_LANGUAGE ? `/${path}` : `/${lang}${path}`;
  }

  return lang === DEFAULT_LANGUAGE ? path : `/${lang}${path}`;
}

export function withLanguageQueryForApp(lang: keyof typeof SUPPORTED_LANGUAGES, appPath: string) {
  const url = new URL(appPath, TEMPORARY_BASE_URL);
  url.searchParams.set(LANGUAGE_QUERY_PARAM, lang);

  if (ABSOLUTE_URL_PATTERN.test(appPath)) {
    return url.toString(); 
  }

  return url.pathname + url.search + url.hash; 
}
