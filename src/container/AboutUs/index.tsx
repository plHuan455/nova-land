import React from 'react';

import AwardListContainer from './awardListContainer';
import DevelopmentHistoryContainer from './developmentHistoryContainer';
import EcoSystemContainer from './ecoSystemContainer';
import FieldActivityContainer from './fieldActivityContainer';
import HeroBannerContainer from './heroBannerContainer';
import InvestmentSectorContainer from './investmentSectorContainer';
import LeadershipContainer from './leaderShipContainer';
import OutStandingNumbersContainer from './outStandingNumbersContainer';
import OutstandingProjectContainer from './outstandingProjectContainer';
import ProjectListMapContainer from './projectListMapContainer';
import TransportationContainer from './transportationContainer';
import VisionMissionValueContainer from './visionMissionValueContainer';

const AboutUSContainer: React.FC = () => (
  <>
    <HeroBannerContainer />
    <VisionMissionValueContainer />
    <OutStandingNumbersContainer />
    <FieldActivityContainer />
    <InvestmentSectorContainer />
    <TransportationContainer />
    <DevelopmentHistoryContainer />
    <OutstandingProjectContainer />
    <ProjectListMapContainer />
    <EcoSystemContainer />
    <LeadershipContainer />
    <AwardListContainer />
  </>
);

export default AboutUSContainer;
