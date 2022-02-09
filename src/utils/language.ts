import { LanguageKey, LocalesType } from 'services/system/types';

export const langLabel = (key: string) => {
  switch (key) {
    case 'vi':
      return 'VN';
    case 'en':
      return 'EN';
    default:
      return '';
  }
};

export const checkActiveLang = (
  activeLang: LanguageKey,
  listActive?: LocalesType,
): boolean => {
  if (listActive && activeLang) {
    return !!listActive[activeLang].active;
  }
  return false;
};

export function getHomeLangSlug(lang?: string) {
  if (lang && lang !== 'vi') return `${lang}/`;
  return '';
}

export function getLangSlug(lang?: string) {
  if (lang && lang !== 'vi') return `${lang}/`;
  return '';
}

export function getHomeLangURL(lang?: string) {
  if (lang && lang !== 'vi') return `/${lang}`;
  return '/';
}

export function getLangURL(lang?: string) {
  if (lang && lang !== 'vi') return `/${lang}/`;
  return '/';
}

export function getActiveLanguages(locales?: LocalesType) {
  if (locales) {
    return (Object.keys(locales) as Array<LanguageKey>).reduce(
      (prev: Array<LanguageKey>, curr: LanguageKey) => (locales[curr].active
        ? [...prev, curr] : [...prev]),
      [],
    );
  }
  return [];
}

export function convertHomeRoute(langList: LanguageKey[]) {
  return langList.map((ele) => getHomeLangSlug(ele));
}

export function convertRoute(langList: LanguageKey[], slug?: string) {
  return langList.map((ele) => `${getLangSlug(ele)}${slug || ''}`);
}
