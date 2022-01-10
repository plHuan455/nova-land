import React from 'react';

import EcoSystemContainer from './ecoSystemContainer';
import FeaturedProjectsContainer from './featuredProjectsContainer';
import HeroBannerContainer from './heroBannerContainer';
import InvestmentSectorContainer from './investmentSectorContainer';
import NewsContainer from './newsContainer';
import OutStandingNumbersContainer from './outStandingNumbersContainer';
import ProjectMapContainer from './projectMapContainer';
import ShareHolderRelationsContainer from './sharesHolderRelationsContainer';
import TransportationContainer from './transportationinfrastructureContainer';

const HomeContainer: React.FC = () => (
  <>
    <HeroBannerContainer />
    <OutStandingNumbersContainer />
    <InvestmentSectorContainer />
    <TransportationContainer />
    <ProjectMapContainer />
    <EcoSystemContainer />
    <FeaturedProjectsContainer />
    <ShareHolderRelationsContainer />
    <NewsContainer />
  </>
);

export default HomeContainer;
