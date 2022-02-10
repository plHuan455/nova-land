import i18n from 'i18next';
import HttpBackend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

import { CONSTANT_LANGUAGE_LIST, LOCAL_STORAGE } from 'utils/constants';
import bundledResources, {
// staticBundledResources,
} from 'utils/localTranslation';

export function detectLanguage() {
  const { pathname } = window.location;
  const lang = pathname.split('/')[1];

  if (lang && CONSTANT_LANGUAGE_LIST.includes(lang)) {
    window.localStorage.setItem(LOCAL_STORAGE.LANGUAGE, lang);
    return lang;
  }
  return 'vi';
}

export function initLanguage() {
  const { pathname } = window.location;
  const lang = pathname.split('/')[1];

  if (lang && CONSTANT_LANGUAGE_LIST.includes(lang)) {
    window.localStorage.setItem(LOCAL_STORAGE.LANGUAGE, lang);
    return lang;
  }
  window.localStorage.setItem(LOCAL_STORAGE.LANGUAGE, 'vi');
  return 'vi';
}

export function changeStoreLanguage(pathname: string) {
  const prefixLang = pathname.split('/')[1];
  const localLang = window.localStorage.getItem(LOCAL_STORAGE.LANGUAGE) || 'vi';

  const lang = CONSTANT_LANGUAGE_LIST.includes(prefixLang) ? prefixLang : 'vi';

  if (lang !== localLang) {
    if (CONSTANT_LANGUAGE_LIST.includes(lang)) {
      window.localStorage.setItem(LOCAL_STORAGE.LANGUAGE, lang);
      return {
        change: true,
        language: lang,
      };
    }
    window.localStorage.setItem(LOCAL_STORAGE.LANGUAGE, 'vi');
    return {
      change: true,
      language: 'vi',
    };
  }
  return {
    change: false,
    language: localLang,
  };
}

i18n
  .use(initReactI18next)
  .use(HttpBackend)
  .init({
    fallbackLng: 'vi',
    lng: initLanguage(), // Detect not work, if lng turn on
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
    backend: {
      loadPath: `${process.env.REACT_APP_API_BASE_URL}systems/fe-translations?locale={{lng}}`,
    },
    ns: ['translation', 'local'],
    //! Only turn this defaultNS on when testing local static translation files
    // defaultNS: 'local',
  });

// eslint-disable-next-line no-restricted-syntax
for (const lang of Object.keys(bundledResources)) {
  i18n.addResources(lang, 'local', bundledResources[lang]);
}

//! Only turn this function on when testing static translation files
// eslint-disable-next-line no-restricted-syntax
// for (const lang of Object.keys(staticBundledResources)) {
//   i18n.addResourceBundle(lang, 'local', staticBundledResources[lang]);
// }

export default i18n;
