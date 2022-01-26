import React from 'react';

import TransportationInfrastructure, { TransportationInfrastructureProps } from 'components/templates/TransportationInfrastructure';

interface TransportationContainerProps extends TransportationInfrastructureProps { }

const TransportationContainer: React.FC<TransportationContainerProps> = ({ ...props }) => (
  <div className="p-aboutUs_investSector">
    <TransportationInfrastructure
      {...props}
    />
  </div>
);

export default TransportationContainer;
