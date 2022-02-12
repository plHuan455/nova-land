import { Story, Meta } from '@storybook/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import InvestmentRelationsOtherDocument from '.';

import RegulationsList from 'assets/dataDummy/InvestmentRelationsOtherDocument';
import { IconName } from 'components/atoms/Icon';
import { OptionType } from 'components/molecules/Pulldown';

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
        icon: 'arrowNextSlateGray' as IconName,
      },
      {
        title: 'Thông tin Công ty',
        slug: '/',
        icon: 'arrowNextSlateGray' as IconName,
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
        icon: 'arrowNextSlateGray' as IconName,
      },
      {
        title: 'Thông tin Công ty',
        slug: '/',
        icon: 'arrowNextSlateGray' as IconName,
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
        icon: 'arrowNextSlateGray' as IconName,
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

const dummyOption: OptionType[] = [
  { value: '1', label: 'Gần đây' },
  { value: '2', label: 'Mới nhất' },

];
export const normal: Story = () => (
  <BrowserRouter>
    <InvestmentRelationsOtherDocument
      dataMenu={menuData}
      dataRegulations={RegulationsList}
      sortOptions={dummyOption}
      totalPage={1}
      handleChangePage={() => {}}
      handleSort={() => {}}
    />
  </BrowserRouter>
);