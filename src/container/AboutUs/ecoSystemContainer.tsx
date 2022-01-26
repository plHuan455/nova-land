import React from 'react';

import Animate from 'components/organisms/Animate';
import EcoSystems, { EcoSystemsProps } from 'components/templates/EcoSystems';

interface EcoSystemContainerProps extends EcoSystemsProps { }

const EcoSystemContainer: React.FC<EcoSystemContainerProps> = ({ ...props }) => (
  <Animate type="goUp">
    <div className="p-aboutUs_ecoSystem">
      <EcoSystems
        {...props}
      />
    </div>
  </Animate>
);

export default EcoSystemContainer;
