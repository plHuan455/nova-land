import { Story, Meta } from '@storybook/react';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import NewsList from '.';

import dataCorporateNews from 'assets/dataDummy/newsList';

export default {
  title: 'Components/templates/NewsList',
  component: NewsList,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <div style={{ height: '100vh' }}>
    <Router>
      <NewsList
        title="Tin Tập đoàn"
        dataNewsList={dataCorporateNews}
        btnName="Xem tất cả Tin tập đoàn"
      />
    </Router>
  </div>
);
