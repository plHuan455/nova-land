/* eslint-disable no-unused-vars */
import { checkExternalUrl } from './functions';
import {
  getLangSlug, getLangURLFirstDash, getStaticSlug,
} from './language';

import i18n from 'i18n';
import { OtherDocumentCategoriesDataTypes } from 'services/documents/types';
import { MenuItemDataTypes } from 'services/menus/types';

const groupMenus = (menus?: MenuItemDataTypes[]) => {
  if (!menus) {
    return [];
  }
  const recursiveMenus = (
    menuList: MenuItemDataTypes[],
    parentId: number,
  ): MenuItemDataTypes[] => {
    const menusGrouped: MenuItemDataTypes[] = [];
    menuList.forEach((menu) => {
      if (menu.parentId === parentId) {
        const subMenus = recursiveMenus(menuList, menu.id);
        menusGrouped.push(
          subMenus.length > 0
            ? {
              ...menu,
              subMenu: subMenus,
            }
            : {
              ...menu,
            },
        );
      }
    });
    return menusGrouped;
  };
  if (menus.length > 0) {
    const firstLevelParentId = menus.find((menu) => menu.depth === 1)!.parentId;
    return recursiveMenus(menus, firstLevelParentId);
  }
  return [];
};

export const groupMenusOtherDocument = (menus?: OtherDocumentCategoriesDataTypes[]) => {
  if (!menus) {
    return [];
  }
  const recursiveMenus = (
    menuList: OtherDocumentCategoriesDataTypes[],
    parentId: number,
  ): OtherDocumentCategoriesDataTypes[] => {
    const menusGrouped: OtherDocumentCategoriesDataTypes[] = [];
    menuList.forEach((menu) => {
      if (menu.parentId === parentId) {
        const subMenus = recursiveMenus(menuList, menu.id);
        menusGrouped.push(
          subMenus.length > 0
            ? {
              ...menu,
              subMenu: subMenus,
            }
            : {
              ...menu,
            },
        );
      }
    });
    return menusGrouped;
  };
  if (menus.length > 0) {
    const firstLevelParentId = menus.find((menu) => menu.parentId === 0)!.parentId;
    return recursiveMenus(menus, firstLevelParentId);
  }
  return [];
};

const checkTypePrefix = (
  type: string,
  slugParam?: string,
  linkParam?: string,
  // eslint-disable-next-line no-unused-vars
  cssClass?: string,
) => {
  let prefix = '';
  if (type === 'OneContent\\News\\Models\\NewsCategory' || type === 'OneContent\\Projects\\Models\\RealEstates') {
    prefix = `${getLangSlug(i18n.language)}${getStaticSlug('NEWS_CATEGORY', i18n.language)}/`;
  }
  if (slugParam) return `${getLangSlug(i18n.language)}${slugParam}/`;
  if (linkParam) return `${getLangSlug(i18n.language)}${linkParam}/`;
  return prefix;
};

export const detectTypePrefix = (type: string, lang: string) => {
  switch (type) {
    // INVESTMENT_SECTORS
    case 'OneContent\\News\\Models\\NewsCategory':
    case 'OneContent\\Projects\\Models\\RealEstates':
      return getStaticSlug('NEWS_CATEGORY', lang);
    // Pages
    default:
      return '';
  }
};

const checkTypePrefixParentCustomLink = (itemMenu: MenuItemDataTypes) => itemMenu.link;

const checkTypePrefixSub = (menuItem: MenuItemDataTypes, menuItemSub: MenuItemDataTypes) => {
  if (menuItemSub.type === 'OneContent\\Page\\Models\\Page') {
    return menuItemSub.reference?.slug;
  }
  return `${checkTypePrefix(menuItem.type, menuItem.reference?.slug, menuItem.link, menuItem.cssClass)}${menuItemSub.reference?.slug || ''}`;
};

export const prefixGroupMenu = (menus?: MenuItemDataTypes[]) => {
  if (!menus) {
    return [];
  }

  return menus.map((ele) => ({
    ...ele,
    link: ele.type === 'custom_link' ? checkTypePrefixParentCustomLink(ele) : ele.link,
    reference: ele.reference
      ? {
        slug: `${ele.reference?.slug || ''}`,
      }
      : undefined,
    subMenu: ele.subMenu
      ? ele.subMenu.map((subEle) => ({
        ...subEle,
        reference: subEle.reference
          ? {
            slug: checkTypePrefixSub(ele, subEle),
          }
          : undefined,
      }))
      : undefined,
  })) as MenuItemDataTypes[];
};

export const returnRouteMenu = (menu: MenuItemDataTypes, lang?: string) => {
  if (menu.type === 'custom_link' && menu.link) {
    return `${getLangURLFirstDash(lang)}${menu.link}`;
  }
  if (menu.reference?.slug) {
    return `${getLangURLFirstDash(lang)}/${menu.reference?.slug !== '/' ? menu.reference.slug : ''}`;
  }
  return '#';
};

export const checkSlugExternalUrl = (menu: MenuItemDataTypes) => {
  if (menu.reference?.slug) {
    return false;
  }
  return checkExternalUrl(menu.link);
};

export default groupMenus;
