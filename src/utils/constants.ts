export const BASE_URL = process.env.REACT_APP_BASE_URL;

export const LOCAL_STORAGE = {
  LANGUAGE: 'NLW_Language',
  ACCESS_TOKEN: 'NLW_AccessToken',
};

export const CONSTANT_LANGUAGE_LIST = ['vi', 'en'];

export const DEFAULT_QUERY_OPTION = {
  retry: 0,
  refetchOnMount: false,
  refetchOnWindowFocus: false,
  refetchOnReconnect: false,
};

export const MENU_CODE = {
  MENU_HEADER: 'menu',
  MENU_FOOTER: 'main-footer',
  MENU_DEVELOPMENT: 'menu-development',
};

export type ConstantRoutesCodes = keyof typeof CONSTANT_ROUTES;
export type ConstantRoutesType = typeof CONSTANT_ROUTES;

export const CONSTANT_ROUTES = {
  NEWS_CATEGORY: 'tin-tuc',
  NEWS_DETAIL: 'chi-tiet-tin-tuc',
  EVENT_DETAIL: 'chi-tiet-su-kien',
};

export const CONSTANT_ROUTES_EN: ConstantRoutesType = {
  NEWS_CATEGORY: 'news',
  NEWS_DETAIL: 'news-details',
  EVENT_DETAIL: 'event-details',
};
