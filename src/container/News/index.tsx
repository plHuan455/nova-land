import React from 'react';

import CorporateNewsContainer from './corporateNewsContainer';
import LatestNewsContainer from './latestNewsContainer';
import MarketNewsContainer from './marketNewsContainer';
import ProjectNewsContainer from './projectNewsContainer';

import HelmetContainer from 'container/helmet';

const NewsContainer: React.FC = () => (
  <>
    <HelmetContainer />
    <LatestNewsContainer />
    <CorporateNewsContainer />
    <MarketNewsContainer />
    <ProjectNewsContainer />
  </>
);

export default NewsContainer;
