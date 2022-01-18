import React from 'react';

import CorporateNewsContainer from './corporateNewsContainer';
import LatestNewsContainer from './latestNewsContainer';
import MarketNewsContainer from './marketNewsContainer';
import ProjectNewsContainer from './projectNewsContainer';

const NewsContainer: React.FC = () => (
  <>
    <LatestNewsContainer />
    <CorporateNewsContainer />
    <MarketNewsContainer />
    <ProjectNewsContainer />
  </>
);

export default NewsContainer;
