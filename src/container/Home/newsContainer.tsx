import React from 'react';

import tabDataHomeNewsList from 'assets/dataDummy/homeNews';
import HomeNews from 'components/templates/HomeNews';
import Section from 'components/templates/Section';

const NewsContainer: React.FC = () => (
  <div className="p-home_news">
    <Section>
      <HomeNews
        title="TIN TỨC"
        tabDataHomeNews={tabDataHomeNewsList}
      />
    </Section>
  </div>
);

export default NewsContainer;
