import React from 'react';

import dataCorporateNews, { tabDataProjectNews } from 'assets/dataDummy/newsList';
import HomeNews from 'components/templates/HomeNews';
import Section from 'components/templates/Section';

const ProjectNewsContainer: React.FC = () => (
  <div className="p-news_projectNews">
    <Section>
      <HomeNews
        title="Tin dự án"
        href="/"
        tabDataHomeNews={tabDataProjectNews}
        newsList={dataCorporateNews}
      />
    </Section>
  </div>
);

export default ProjectNewsContainer;
