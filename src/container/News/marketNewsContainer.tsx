import React from 'react';

import { dataMarketNews } from 'assets/dataDummy/newsList';
import Animate from 'components/organisms/Animate';
import NewsList from 'components/templates/NewsList';

const MarketNewsContainer: React.FC = () => (
  <Animate type="goUp">
    <div className="p-news_marketNewsContainer pt-80 pb-80">
      <NewsList
        title="Tin Thị Trường"
        dataNewsList={dataMarketNews}
        btnName="Xem tất cả Tin thị trường"
      />
    </div>
  </Animate>
);

export default MarketNewsContainer;
