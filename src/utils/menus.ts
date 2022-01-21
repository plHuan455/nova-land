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

const checkTypePrefix = (slugParam?: string, linkParam?: string) => {
  if (slugParam) return `${slugParam}/`;
  if (linkParam) return `${linkParam}/`;
  return '';
};

export const prefixGroupMenu = (menus?: MenuItemDataTypes[]) => {
  if (!menus) {
    return [];
  }

  return menus.map((ele) => {
    const prefix = checkTypePrefix(ele.reference?.slug, ele.link);

    return {
      ...ele,
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
              slug: `${prefix}${subEle.reference?.slug || ''}`,
            }
            : undefined,
        }))
        : undefined,
    };
  }) as MenuItemDataTypes[];
};

export default groupMenus;
