import React from 'react';

import { investmentRelationsData } from 'assets/dataDummy/latestNews';
import Animate from 'components/organisms/Animate';
import LatestNews from 'components/templates/LatestNews';

const LatestNewsContainer: React.FC = () => (
  <Animate type="goUp">
    <div className="p-investmentRelations_latestNews">
      <LatestNews
        hasLine
        dataLatestNews={investmentRelationsData}
      />
    </div>
  </Animate>
);

export default LatestNewsContainer;
