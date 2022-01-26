import React from 'react';

import dataCorporateNews from 'assets/dataDummy/newsList';
import NewsList from 'components/templates/NewsList';
import Section from 'components/templates/Section';

const CorporateNewsContainer: React.FC = () => (
  <div className="animate animate-goUp">
    <div className="p-news_corporateNews">
      <Section>
        <NewsList
          title="Tin Tập đoàn"
          dataNewsList={dataCorporateNews}
          btnName="Xem tất cả Tin tập đoàn"
        />
      </Section>
    </div>
  </div>
);

export default CorporateNewsContainer;
