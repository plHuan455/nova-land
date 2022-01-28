import React from 'react';

import MainLayout from 'components/templates/MainLayout';
import NewsDetailContainer from 'container/NewsDetail';

const NewsDetailPage: React.FC = () => (
  <MainLayout>
    <div className="p-newsdetail">
      <NewsDetailContainer />
    </div>
  </MainLayout>
);

export default NewsDetailPage;
