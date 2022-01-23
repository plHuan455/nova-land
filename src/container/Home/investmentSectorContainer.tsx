import React from 'react';

import investmentSectorData from 'assets/dataDummy/investmentSector';
import Animate from 'components/organisms/Animate';
import InvestmentSector from 'components/templates/InvestmentSector';
import Section from 'components/templates/Section';

const InvestmentSectorContainer: React.FC = () => (
  <Animate type="goUp">
    <div className="p-home_investSector">
      <Section>
        <InvestmentSector
          title="Bất động sản"
          investmentSectorList={investmentSectorData}
          isSmall
        />
      </Section>
    </div>
  </Animate>
);

export default InvestmentSectorContainer;
