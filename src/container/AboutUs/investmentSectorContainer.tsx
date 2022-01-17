import React from 'react';

import investmentSectorData from 'assets/dataDummy/investmentSector';
import InvestmentSector from 'components/templates/InvestmentSector';

const InvestmentSectorContainer: React.FC = () => (
  <div className="p-aboutUs_investmentSector pt-100">
    <InvestmentSector
      title="BẤT ĐỘNG SẢN"
      investmentSectorList={investmentSectorData}
    />
  </div>
);

export default InvestmentSectorContainer;
