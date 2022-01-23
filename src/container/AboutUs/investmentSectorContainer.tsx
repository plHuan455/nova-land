import React from 'react';

import investmentSectorData from 'assets/dataDummy/investmentSector';
import InvestmentSector from 'components/templates/InvestmentSector';

const InvestmentSectorContainer: React.FC = () => (
  <div className="p-aboutUs_investmentSector">
    <InvestmentSector
      title="BẤT ĐỘNG SẢN"
      investmentSectorList={investmentSectorData}
      isSmall
    />
  </div>
);

export default InvestmentSectorContainer;
