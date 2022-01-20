export type MenusTypes = {
  code: string;
  items: MenusItemsTypes[];
}

type MenusItemsTypes = {
  id: number;
  menuId: number;
  title: string;
  link: string;
  type: string;
  referenceId: string;
  cssClass: string;
  icon: string;
  target: string;
  parentId: number;
  lft: number;
  rgt: number;
  depth: number;
  createdAt: string;
  updatedAt: string;
  reference: string;
}
