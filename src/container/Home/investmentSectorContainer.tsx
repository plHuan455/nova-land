import React from 'react';

import investmentSectorData from 'assets/dataDummy/investmentSector';
import InvestmentSector from 'components/templates/InvestmentSector';

const InvestmentSectorContainer: React.FC = () => (
  <div className="p-home_investSector pt-100">
    <InvestmentSector title="Bất động sản" investmentSectorList={investmentSectorData} />
  </div>
);

export default InvestmentSectorContainer;
