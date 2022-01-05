import { Story, Meta } from '@storybook/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import HomeNews, { HomeNewsCard } from '.';

import tabDataHomeNewsList from 'assets/dataDummy/homeNews';
import imgHomeNewsCard from 'assets/images/HomeNews/img_homeNewsCard.png';

export default {
  title: 'Components/templates/HomeNews',
  component: HomeNews,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <BrowserRouter>
    <HomeNews
      title="TIN TỨC"
      tabDataHomeNews={tabDataHomeNewsList}
    />
  </BrowserRouter>
);

export const homeNewsCard: Story = () => (
  <BrowserRouter>
    <div style={{ margin: '30px', maxWidth: '547px' }}>
      <HomeNewsCard
        imgSrc={imgHomeNewsCard}
        title="Người dân TP.HCM đón Giáng sinh sớm, check-in cùng cây thông 25 m"
        desc="Còn hơn một tháng nữa mới đến Giáng sinh, nhưng Novaland Gallery đã trang hoàng một tháng nữa mới đến Giáng sinh"
        date="23/11/2021"
        totalViews={111}
      />
    </div>
  </BrowserRouter>
);
