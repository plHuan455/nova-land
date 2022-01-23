import React from 'react';

import StockInformationContainer from './StockInformation';
import BannerContainer from './banner';
import LatestNewsContainer from './latestNews';
import OtherDocumentContainer from './otherDocument';
import ScheduleContainer from './schedule';

import Section from 'components/templates/Section';

interface InvestmentRelationsContainerProps {
}

const InvestmentRelationsContainer: React.FC<InvestmentRelationsContainerProps> = () => (
  <div className="p-investmentRelations">
    <BannerContainer />
    <Section>
      <StockInformationContainer />
    </Section>
    <Section>
      <LatestNewsContainer />
    </Section>
    <Section>
      <ScheduleContainer />
    </Section>
    <Section>
      <OtherDocumentContainer />
    </Section>
  </div>
);

export default InvestmentRelationsContainer;
