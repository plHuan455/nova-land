import React from 'react';

import InvestmentRelationsContainer, { InvestmentRelationsBlocks } from 'container/InvestmentRelations';

const InvestmentRelations: React.FC<BasePageData<InvestmentRelationsBlocks>> = (props) => (
  <div className="p-investmentRelations">
    <InvestmentRelationsContainer {...props} />
  </div>
);

export default InvestmentRelations;
