import React from 'react';

import MainLayout from 'components/templates/MainLayout';
import NewsCategoryContainer from 'container/NewsCategory';

const NewsCategory: React.FC = () => (
  <MainLayout>
    <div className="p-newsCategory">
      <NewsCategoryContainer />
    </div>
  </MainLayout>
);

export default NewsCategory;
