import { Story, Meta } from '@storybook/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import FeaturedProjects from '.';

import dataList from 'assets/dataDummy/featuredProjects';

export default {
  title: 'Components/templates/FeaturedProjects',
  component: FeaturedProjects,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <BrowserRouter>
    <FeaturedProjects title="NHỮNG DỰ ÁN NỔI BẬT" featuredProjectList={dataList} />
  </BrowserRouter>
);
