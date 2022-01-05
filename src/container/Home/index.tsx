import React from 'react';

import EcoSystemContainer from './ecoSystemContainer';
import InvestmentSectorContainer from './investmentSectorContainer';
import NewsContainer from './newsContainer';
import OutStandingNumbersContainer from './outStandingNumbersContainer';
import ProjectMapContainer from './projectMapContainer';
import ShareHolderRelationsContainer from './sharesHolderRelationsContainer';
import TransportationContainer from './transportationinfrastructureContainer';

const HomeContainer: React.FC = () => (
  <>
    <div>Banner Hero</div>
    <OutStandingNumbersContainer />
    <InvestmentSectorContainer />
    <TransportationContainer />
    <ProjectMapContainer />
    <EcoSystemContainer />
    <ShareHolderRelationsContainer />
    <NewsContainer />
  </>
);

export default HomeContainer;
