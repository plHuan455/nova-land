import { MenuItemDataTypes } from 'services/menus/types';

const headerMenuDummy: MenuItemDataTypes[] = [
  {
    id: 1,
    menuId: 1,
    depth: 1,
    lft: 1,
    parentId: 1,
    referenceId: 1,
    reference: {
      slug: '/',
    },
    type: '22',
    createdAt: 'ss',
    target: '_blank',
    rgt: 1,
    title: 'Trang chủ',
    updatedAt: 'sss',
  },
  {
    id: 1,
    menuId: 1,
    depth: 1,
    lft: 1,
    parentId: 1,
    referenceId: 1,
    reference: {
      slug: '/ve-chung-toi',
    },
    type: '22',
    createdAt: 'ss',
    target: '_blank',
    rgt: 1,
    title: 'giới thiệu',
    updatedAt: 'sss',
  },
  {
    id: 1,
    menuId: 1,
    depth: 1,
    lft: 1,
    parentId: 1,
    referenceId: 1,
    reference: {
      slug: '/linh-vuc-hoat-dong',
    },
    type: '22',
    createdAt: 'ss',
    target: '_blank',
    rgt: 1,
    title: 'Lĩnh vực hoạt động',
    updatedAt: 'sss',
  },
  {
    id: 1,
    menuId: 1,
    depth: 1,
    lft: 1,
    parentId: 1,
    referenceId: 1,
    reference: {
      slug: '/quan-he-dau-tu',
    },
    type: '22',
    createdAt: 'ss',
    target: '_blank',
    rgt: 1,
    title: 'quan hệ đầu tư',
    updatedAt: 'sss',
  },
  {
    id: 1,
    menuId: 1,
    depth: 1,
    lft: 1,
    parentId: 1,
    referenceId: 1,
    reference: {
      slug: '/tin-tuc',
    },
    type: '22',
    createdAt: 'ss',
    target: '_blank',
    rgt: 1,
    title: 'tin tức',
    updatedAt: 'sss',
  },
  {
    id: 1,
    menuId: 1,
    depth: 1,
    lft: 1,
    parentId: 1,
    referenceId: 1,
    reference: {
      slug: '/tuyen-dung',
    },
    type: '22',
    createdAt: 'ss',
    target: '_blank',
    rgt: 1,
    title: 'tuyển dụng',
    updatedAt: 'sss',
  },
  {
    id: 1,
    menuId: 1,
    depth: 1,
    lft: 1,
    parentId: 1,
    referenceId: 1,
    reference: {
      slug: '/lien-he',
    },
    type: '22',
    createdAt: 'ss',
    target: '_blank',
    rgt: 1,
    title: 'liên hệ',
    updatedAt: 'sss',
  },
];

export type LanguageType = 'VN'|'EN';

export const LIST_LANGUAGE:Array<{label:LanguageType, value: string}> = [
  {
    label: 'VN',
    value: 'vi',
  },
  {
    label: 'EN',
    value: 'en',
  },
];

export default headerMenuDummy;
