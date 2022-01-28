import React from 'react';

import MainLayout from 'components/templates/MainLayout';
import InvestmentRelationsContainer, { InvestmentRelationsBlocks } from 'container/InvestmentRelations';

const InvestmentRelations: React.FC<BasePageData<InvestmentRelationsBlocks>> = (props) => (
  <MainLayout>
    <div className="p-investmentRelations">
      <InvestmentRelationsContainer {...props} />
    </div>
  </MainLayout>
);

export default InvestmentRelations;
