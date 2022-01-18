import { Story, Meta } from '@storybook/react';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import FeaturedNews, { FeaturedNewsCard } from '.';

import featuredNewsCardList from 'assets/dataDummy/featuredNews';

export default {
  title: 'Components/templates/FeaturedNews',
  component: FeaturedNews,
  argTypes: {},
} as Meta;

export const vertical: Story = () => (
  <div style={{ width: '582px' }}>
    <Router>
      <FeaturedNewsCard
        {...featuredNewsCardList[0]}
      />
    </Router>
  </div>
);

export const horizontal: Story = () => (
  <div style={{ width: '582px' }}>
    <Router>
      <FeaturedNewsCard
        {...featuredNewsCardList[1]}
      />
    </Router>
  </div>
);

export const normal: Story = () => (
  <Router>
    <FeaturedNews
      dataFeaturedNews={featuredNewsCardList}
    />
  </Router>
);
