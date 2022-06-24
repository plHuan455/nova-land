import { LanguageKey, LocalesType } from 'services/system/types';
import {
  ConstantRoutesCodes, CONSTANT_ROUTES, CONSTANT_ROUTES_EN,
} from 'utils/constants';

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

export function getLangSlug(lang?: string) {
  if (lang && lang !== 'vi') return `${lang}/`;
  return '';
}

export function getLangURLFirstDash(lang?: string) {
  if (lang && lang !== 'vi') return `/${lang}`;
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

export function getLangPageTranslation(lang?: string, isHome?: boolean) {
  if (lang && lang !== 'vi' && !isHome) return lang;
  if (lang && lang !== 'vi') return `${lang}/`;
  return '';
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
  return langList.map((ele) => getLangSlug(ele));
}

export function convertRoute(langList: LanguageKey[], slug?: string) {
  return langList.map((ele) => `${getLangSlug(ele)}${slug || ''}`);
}

export function getStaticSlug(code: ConstantRoutesCodes, lang: string) {
  switch (lang) {
    case 'en':
      return `${CONSTANT_ROUTES_EN[code]}`;
    default:
      return `${CONSTANT_ROUTES[code]}`;
  }
}

export function convertStaticRoute(
  code: ConstantRoutesCodes,
  langList: LanguageKey[],
  noSlug?: boolean,
) {
  return langList.map(
    (ele) => `${getLangSlug(ele)}${getStaticSlug(code, ele)}${noSlug ? '' : '/:slug'}`,
  );
}

export function getPrefixURLCode(lang: string, code: ConstantRoutesCodes, slug?: string) {
  if (slug) return `/${getLangSlug(lang)}${getStaticSlug(code, lang)}/${slug}`;
  return '';
}

export function getPrefixURLCodeSwicthLang(lang: string, code: ConstantRoutesCodes, slug?: string) {
  if (slug) return `${getLangSlug(lang)}${getStaticSlug(code, lang)}/${slug}`;
  return '';
}

export function checkExistingPrefixLang(to?: string) {
  if (!to) return 'vi';
  const prefixLang = to.split('/');
  if (prefixLang.length > 1 && langLabel(prefixLang[1])) return prefixLang[1];
  return 'vi';
}
