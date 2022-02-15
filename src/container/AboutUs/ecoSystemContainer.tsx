import React from 'react';

import Animate from 'components/organisms/Animate';
import EcoSystems, { EcoSystemsProps } from 'components/templates/EcoSystems';
import Section from 'components/templates/Section';

interface EcoSystemContainerProps extends EcoSystemsProps { }

const EcoSystemContainer: React.FC<EcoSystemContainerProps> = ({ ...props }) => (
  <Animate type="goUp">
    <div className="p-aboutUs_ecoSystem">
      <Section>
        <EcoSystems
          {...props}
        />
      </Section>
    </div>
  </Animate>
);

export default EcoSystemContainer;
