import { Story, Meta } from '@storybook/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import InvestmentRelationsOtherDocument from '.';

import { IconName } from 'components/atoms/Icon';

export default {
  title: 'Components/templates/InvestmentRelationsOtherDocument',
  component: InvestmentRelationsOtherDocument,
  argTypes: {},
} as Meta;

const menuData = [
  {
    id: 1,
    title: 'Thông tin về Tập đoàn Novaland',
    slug: '#',
    icon: 'arrowUp' as IconName,
    subMenu: [
      {
        title: 'Điều lệ',
        slug: '/',
        icon: 'greyArrowRight' as IconName,
      },
      {
        title: 'Thông tin Công ty',
        slug: '/',
        icon: 'greyArrowRight' as IconName,
      },

    ],
  },
  {
    id: 2,
    title: 'Công bố thông tin',
    slug: '#',
    icon: 'arrowUp' as IconName,
    subMenu: [
      {
        title: 'Điều lệ',
        slug: '/',
        icon: 'greyArrowRight' as IconName,
      },
      {
        title: 'Thông tin Công ty',
        slug: '/',
        icon: 'greyArrowRight' as IconName,
      },
    ],
  },
  {
    id: 3,
    title: 'Hoạt động Nhà đầu tư',
    slug: '#',
    icon: 'arrowUp' as IconName,
    subMenu: [
      {
        title: 'Điều lệ',
        slug: '/',
        icon: 'greyArrowRight' as IconName,
      },
    ],
  },
  {
    id: 4,
    title: 'Giá cổ phiếu và thông tin thị trường',
    slug: '#',
    icon: 'arrowUp' as IconName,
    subMenu: [],
  },
];

export const normal: Story = () => (
  <BrowserRouter>
    <InvestmentRelationsOtherDocument
      dataMenu={menuData}
    />
  </BrowserRouter>
);
