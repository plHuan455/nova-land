import { Story, Meta } from '@storybook/react';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import LatestNews, { LatestNewsCard } from '.';

import latestNewsCardList from 'assets/dataDummy/latestNews';

export default {
  title: 'Components/templates/LatestNews',
  component: LatestNews,
  argTypes: {},
} as Meta;

export const vertical: Story = () => (
  <div style={{ width: '582px' }}>
    <Router>
      <LatestNewsCard
        {...latestNewsCardList[0]}
      />
    </Router>
  </div>
);

export const horizontal: Story = () => (
  <div style={{ width: '582px' }}>
    <Router>
      <LatestNewsCard
        {...latestNewsCardList[1]}
      />
    </Router>
  </div>
);

export const normal: Story = () => (
  <Router>
    <LatestNews
      dataLatestNews={latestNewsCardList}
    />
  </Router>
);
