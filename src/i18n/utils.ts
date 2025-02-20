const languages = {
  en: 'English',
  de: 'German',
};

const defaultLang = 'en';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as keyof typeof languages;
  return defaultLang;
}

export function getPathForLanguage(lang: keyof typeof languages, path: string) {
  if (path.startsWith("#")) {
    return lang === defaultLang ? `/${path}` : `/${lang}${path}`;
  }
  
  return lang === defaultLang ? path : `/${lang}${path}`;
}

