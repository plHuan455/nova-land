import React from 'react';

import latestNewsCardList from 'assets/dataDummy/latestNews';
import Animate from 'components/organisms/Animate';
import LatestNews from 'components/templates/LatestNews';

const LatestNewsContainer: React.FC = () => (
  <Animate type="goUp">
    <div className="p-news_latestNews u-pt-lg-93 u-pt-sm-82 u-pt-75">
      <LatestNews
        dataLatestNews={latestNewsCardList}
      />
    </div>
  </Animate>
);

export default LatestNewsContainer;
