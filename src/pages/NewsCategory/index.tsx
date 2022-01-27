import React from 'react';

import MainLayoutContainer from 'container/MainLayout';
import NewsCategoryContainer from 'container/NewsCategory';

const NewsCategory: React.FC = () => (
  <MainLayoutContainer>
    <div className="p-newsCategory">
      <NewsCategoryContainer />
    </div>
  </MainLayoutContainer>
);

export default NewsCategory;
