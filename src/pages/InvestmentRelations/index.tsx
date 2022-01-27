import React from 'react';

import InvestmentRelationsContainer, { InvestmentRelationsBlocks } from 'container/InvestmentRelations';
import MainLayoutContainer from 'container/MainLayout';

const InvestmentRelations: React.FC<BasePageData<InvestmentRelationsBlocks>> = (props) => (
  <MainLayoutContainer>
    <div className="p-investmentRelations">
      <InvestmentRelationsContainer {...props} />
    </div>
  </MainLayoutContainer>
);

export default InvestmentRelations;
