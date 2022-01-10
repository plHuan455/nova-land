import React from 'react';

import investmentSectorData from 'assets/dataDummy/investmentSector';
import Animate from 'components/organisms/Animate';
import InvestmentSector from 'components/templates/InvestmentSector';

const InvestmentSectorContainer: React.FC = () => (
  <Animate type="goUp">
    <div className="p-home_investSector pt-100">
      <InvestmentSector title="Bất động sản" investmentSectorList={investmentSectorData} />
    </div>
  </Animate>
);

export default InvestmentSectorContainer;
