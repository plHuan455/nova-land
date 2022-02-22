import { getStaticSlug } from './language';

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

const checkTypePrefix = (type: string, slugParam?: string, linkParam?: string) => {
  if (type === 'OneContent\\Page\\Models\\Page') {
    return '/';
  }
  if (type === 'OneContent\\News\\Models\\NewsCategory' || type === 'OneContent\\Projects\\Models\\RealEstates') {
    return `/${getStaticSlug('NEWS_CATEGORY', i18n.language)}/`;
  }
  if (slugParam) return `${slugParam}/`;
  if (linkParam) return `${linkParam}/`;
  return '';
};

export function getLangURL(lang?: string) {
  if (lang && lang !== 'vi') return `/${lang}`;
  return '';
}

export const getLanguagePrefix = (lang: string) => {
  if (lang && lang !== 'vi') return `${lang}/`;
  return '';
};

export const prefixGroupMenu = (menus?: MenuItemDataTypes[]) => {
  if (!menus) {
    return [];
  }

  return menus.map((ele) => ({
    ...ele,
    reference: ele.reference
      ? {
        slug: `${getLanguagePrefix(i18n.language)}${ele.reference?.slug || ''}`,
      }
      : undefined,
    subMenu: ele.subMenu
      ? ele.subMenu.map((subEle) => ({
        ...subEle,
        reference: subEle.reference
          ? {
            slug: `${getLanguagePrefix(i18n.language)}${checkTypePrefix(subEle.type, ele.reference?.slug, ele.link)}${subEle.reference?.slug || ''}`,
          }
          : undefined,
      }))
      : undefined,
  })) as MenuItemDataTypes[];
};

export default groupMenus;
