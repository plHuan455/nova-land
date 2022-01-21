import React from 'react';

import Animate from 'components/organisms/Animate';
import TransportationInfrastructure from 'components/templates/TransportationInfrastructure';
import { getImageURL } from 'utils/functions';

export interface TransportationTypes {
  image: string;
  description: string;
  titleSection: string;
}

interface TransportationBlock {
  blocks: TransportationTypes;
}

const TransportationContainer: React.FC<TransportationBlock> = ({
  blocks,
}) => (
  <Animate type="goUp">
    <div className="p-home_investSector">
      <TransportationInfrastructure
        title={blocks.titleSection}
        desc={blocks.description}
        imgSrc={getImageURL(blocks.image)}
      />
    </div>
  </Animate>
);

export default TransportationContainer;
