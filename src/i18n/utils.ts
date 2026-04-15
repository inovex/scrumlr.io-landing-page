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
  const separator = appPath.includes("?") ? "&" : "?";
  return `${appPath}${separator}lng=${lang}`;
}

