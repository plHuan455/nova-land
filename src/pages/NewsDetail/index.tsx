import React from 'react';

import MainLayoutContainer from 'container/MainLayout';
import NewsDetailContainer from 'container/NewsDetail';

const NewsDetailPage: React.FC = () => (
  <MainLayoutContainer>
    <div className="p-newsdetail">
      <NewsDetailContainer />
    </div>
  </MainLayoutContainer>
);

export default NewsDetailPage;
