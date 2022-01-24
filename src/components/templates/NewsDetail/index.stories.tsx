import { Story, Meta } from '@storybook/react';
import React from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';

import NewsDetail from '.';

import newsDetailDumy from 'assets/dataDummy/newsDetail';

export default {
  title: 'Components/templates/NewsDetail',
  component: NewsDetail,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <Router>
    <NewsDetail
      newsDetail={newsDetailDumy.newsDetailData.newsDetail}
      relatedNews={newsDetailDumy.newsDetailData.relatedNews}
      keyword={newsDetailDumy.keywordList}
      titleLatest="Các tin mới nhất"
      titleHot="Các tin nổi bật"
    />
  </Router>
);
