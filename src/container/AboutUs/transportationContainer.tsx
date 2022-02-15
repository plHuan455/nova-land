import React from 'react';

import Section from 'components/templates/Section';
import TransportationInfrastructure, { TransportationInfrastructureProps } from 'components/templates/TransportationInfrastructure';

interface TransportationContainerProps extends TransportationInfrastructureProps { }

const TransportationContainer: React.FC<TransportationContainerProps> = ({ ...props }) => (
  <div className="p-aboutUs_investSector">
    <Section modifiers="noPt">
      <TransportationInfrastructure
        {...props}
      />
    </Section>
  </div>
);

export default TransportationContainer;
