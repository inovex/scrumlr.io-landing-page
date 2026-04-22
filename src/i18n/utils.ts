const TEMPORARY_BASE_URL = "https://temporary-base.com";
const ABSOLUTE_URL_PATTERN = /^[a-zA-Z][a-zA-Z\d+.-]*:/;
const LANGUAGE_QUERY_PARAM = "lng" // language query parameter for the search string in the url

const languages = {
  en: 'English',
  de: 'German',
  fr: 'French',
};

const defaultLang = 'en';
export type SupportedLanguage = keyof typeof languages;

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as keyof typeof languages;
  return defaultLang;
}

export function getPathForLanguage(lang: SupportedLanguage, path: string) {
  if (path.startsWith("#")) {
    return lang === defaultLang ? `/${path}` : `/${lang}${path}`;
  }

  return lang === defaultLang ? path : `/${lang}${path}`;
}

export function getAppPathWithLanguage(lang: SupportedLanguage, appPath: string) {
  const url = new URL(appPath, TEMPORARY_BASE_URL);
  url.searchParams.set(LANGUAGE_QUERY_PARAM, lang);

  if (ABSOLUTE_URL_PATTERN.test(appPath)) {
    return url.toString(); 
  }

  return url.pathname + url.search + url.hash; 
}
