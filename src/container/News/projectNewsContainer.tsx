import React from 'react';

import { tabDataProjectNews } from 'assets/dataDummy/newsList';
import HomeNews from 'components/templates/HomeNews';

const ProjectNewsContainer: React.FC = () => (
  <div className="p-news_projectNews pt-80 pb-80">
    <HomeNews
      title="Tin dự án"
      tabDataHomeNews={tabDataProjectNews}
    />
  </div>
);

export default ProjectNewsContainer;
