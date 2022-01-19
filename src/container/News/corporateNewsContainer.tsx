import React from 'react';

import dataCorporateNews from 'assets/dataDummy/newsList';
import Animate from 'components/organisms/Animate';
import NewsList from 'components/templates/NewsList';
import Section from 'components/templates/Section';

const CorporateNewsContainer: React.FC = () => (
  <Animate type="goUp">
    <div className="p-news_corporateNews">
      <Section>
        <NewsList
          title="Tin Tập đoàn"
          dataNewsList={dataCorporateNews}
          btnName="Xem tất cả Tin tập đoàn"
        />
      </Section>
    </div>
  </Animate>
);

export default CorporateNewsContainer;
