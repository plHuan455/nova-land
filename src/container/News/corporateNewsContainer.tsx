import React from 'react';

import dataCorporateNews from 'assets/dataDummy/newsList';
import Animate from 'components/organisms/Animate';
import NewsList from 'components/templates/NewsList';

const CorporateNewsContainer: React.FC = () => (
  <Animate type="goUp">
    <div className="p-news_corporateNews pt-80 pb-80">
      <NewsList
        title="Tin Tập đoàn"
        dataNewsList={dataCorporateNews}
        btnName="Xem tất cả Tin tập đoàn"
      />
    </div>
  </Animate>
);

export default CorporateNewsContainer;
