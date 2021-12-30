import React from 'react';

import EcoSystemContainer from './ecoSystemContainer';
import InvestmentSectorContainer from './investmentSectorContainer';
import NewsContainer from './newsContainer';
import OutStandingNumbersContainer from './outStandingNumbersContainer';
import TransportationContainer from './transportationinfrastructureContainer';

const HomeContainer: React.FC = () => (
  <>
    <div>Banner Hero</div>
    <OutStandingNumbersContainer />
    <InvestmentSectorContainer />
    <TransportationContainer />
    <EcoSystemContainer />
    <NewsContainer />
  </>
);

export default HomeContainer;
