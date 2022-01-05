import { Story, Meta } from '@storybook/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import FeaturedProjects, { FeaturedProjectTypes } from '.';

import img1 from 'assets/images/Banner/banner_home.png';
import img2 from 'assets/images/banner2.png';

export default {
  title: 'Components/templates/FeaturedProjects',
  component: FeaturedProjects,
  argTypes: {},
} as Meta;

const dataList: FeaturedProjectTypes[] = [
  {
    title: 'NovaWorld Ho Tram The Tropicana',
    content:
      'Là phân kỳ đầu tiên của dự án NovaWorld Ho Tram, với quy mô hơn 140 hecta, phân kỳ The Tropicana mang phong cách thiết kế miền nhiệt đới, nơi thiên nhiên giao hòa.',
    src: img1,
    href: '/',
  },
  {
    title: 'NovaWorld Phan Thiet',
    content:
      'Là phân kỳ đầu tiên của dự án NovaWorld Ho Tram, với quy mô hơn 140 hecta, phân kỳ The Tropicana mang phong cách thiết kế miền nhiệt đới, nơi thiên nhiên giao hòa.',
    src: img2,
    href: '/',
  },
  {
    title: 'Aqua City',
    content:
      'Là phân kỳ đầu tiên của dự án NovaWorld Ho Tram, với quy mô hơn 140 hecta, phân kỳ The Tropicana mang phong cách thiết kế miền nhiệt đới, nơi thiên nhiên giao hòa.',
    src: img1,
    href: '/',
  },
];

export const normal: Story = () => (
  <BrowserRouter>
    <FeaturedProjects title="NHỮNG DỰ ÁN NỔI BẬT" featuredProjectList={dataList} />
  </BrowserRouter>
);
