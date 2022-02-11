import { ConstantRoutesCodes, CONSTANT_ROUTES, CONSTANT_ROUTES_EN } from './constants';

export function getStaticSlug(code: ConstantRoutesCodes, lang: string) {
  switch (lang) {
    case 'en':
      return `${CONSTANT_ROUTES_EN[code]}`;
    default:
      return `${CONSTANT_ROUTES[code]}`;
  }
}

export const PlaceHolder = '';
