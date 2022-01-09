import { HeaderMenuTypes } from 'components/organisms/Header';

const headerMenuDummy: HeaderMenuTypes[] = [
  {
    href: '/',
    title: 'Trang chủ',
  },
  {
    href: '/ve-chung-toi',
    title: 'giới thiệu',
  },
  {
    href: '/mua-ban',
    title: 'mua&bán',
  },
  {
    href: '/quan-he-dau-tu',
    title: 'quan hệ đầu tư',
  },
  {
    href: '/tin-tuc',
    title: 'tin tức',
  },
  {
    href: '/tuyen-dung',
    title: 'tuyển dụng',
  },
  {
    href: '/lien-he',
    title: 'liên hệ',
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
