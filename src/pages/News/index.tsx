import React from 'react';

import MainLayoutContainer from 'container/MainLayout';
import NewsContainer from 'container/News';

const News: React.FC = () => (
  <MainLayoutContainer>
    <div className="p-news">
      <NewsContainer />
    </div>
  </MainLayoutContainer>
);

export default News;
