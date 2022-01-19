import React from 'react';

import { dataMarketNews } from 'assets/dataDummy/newsList';
import Animate from 'components/organisms/Animate';
import NewsList from 'components/templates/NewsList';
import Section from 'components/templates/Section';

const MarketNewsContainer: React.FC = () => (
  <Animate type="goUp">
    <Section>
      <div className="p-news_marketNewsContainer">
        <NewsList
          title="Tin Thị Trường"
          dataNewsList={dataMarketNews}
          btnName="Xem tất cả Tin thị trường"
        />
      </div>
    </Section>
  </Animate>
);

export default MarketNewsContainer;
