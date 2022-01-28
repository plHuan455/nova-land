import React from 'react';

import MainLayout from 'components/templates/MainLayout';
import NewsContainer from 'container/News';

const News: React.FC = () => (
  <MainLayout>
    <div className="p-news">
      <NewsContainer />
    </div>
  </MainLayout>
);

export default News;
