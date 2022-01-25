import React from 'react';

import investmentSectorData from 'assets/dataDummy/investmentSector';
import Animate from 'components/organisms/Animate';
import InvestmentSector from 'components/templates/InvestmentSector';
import Section from 'components/templates/Section';

export interface InvestmentSectorTypes {
  titleSection: string;
}

interface InvestmentSectorBlock {
  blocks: InvestmentSectorTypes;
}

const InvestmentSectorContainer: React.FC<InvestmentSectorBlock> = ({
  blocks,
}) => (
  <Animate type="goUp">
    <div className="p-home_investSector">
      <Section>
        <InvestmentSector
          title={blocks.titleSection}
          investmentSectorList={investmentSectorData}
          isSmall
        />
      </Section>
    </div>
  </Animate>
);

export default InvestmentSectorContainer;
