import React from 'react';

import InvestmentSector, { InvestmentSectorProps } from 'components/templates/InvestmentSector';

interface InvestmentSectorContainerProps extends InvestmentSectorProps { }

const InvestmentSectorContainer: React.FC<InvestmentSectorContainerProps> = ({ ...props }) => (
  <div className="p-aboutUs_investmentSector pt-100">
    <InvestmentSector
      {...props}
    />
  </div>
);

export default InvestmentSectorContainer;
