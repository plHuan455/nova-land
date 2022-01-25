export type MenuItemTypes = {
  id: number;
  menuId: number;
  title: string;
  link?: string;
  type: string;
  referenceId?: number;
  cssClass?: string;
  icon?: string;
  target: string;
  parentId: number;
  lft: number;
  rgt: number;
  depth: number;
  createdAt: string;
  updatedAt: string;
  reference?: {
    slug: string;
  };
}

export type MenuDataTypes = {
  code: string;
  items: MenuItemTypes[];
}

export type MenuItemDataTypes = {
  subMenu?: MenuItemDataTypes[];
} & MenuItemTypes;
