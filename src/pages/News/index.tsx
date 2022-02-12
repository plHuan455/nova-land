import React from 'react';

import MainLayout from 'components/templates/MainLayout';
import NewsContainer, { NewsData } from 'container/News';

const News: React.FC<BasePageData<NewsData>> = (props) => (
  <MainLayout>
    <div className="p-news">
      <NewsContainer {...props} />
    </div>
  </MainLayout>
);

export default News;
