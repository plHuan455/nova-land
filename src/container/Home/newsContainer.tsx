import React from 'react';

import tabDataHomeNewsList from 'assets/dataDummy/homeNews';
import HomeNews from 'components/templates/HomeNews';

const NewsContainer: React.FC = () => (
  <div className="p-home_news pt-100 pb-100">
    <HomeNews
      title="HỆ SINH THÁI NOVA"
      tabDataHomeNews={tabDataHomeNewsList}
    />
  </div>
);

export default NewsContainer;
