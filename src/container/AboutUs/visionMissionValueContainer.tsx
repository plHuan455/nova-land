import React from 'react';

import Animate from 'components/organisms/Animate';
import VisionMissionValue, { VisionMissionValueProps } from 'components/templates/VisionMissionValue';

interface VisionMissionValueContainerProps extends VisionMissionValueProps{}

const VisionMissionValueContainer: React.FC<VisionMissionValueContainerProps> = ({ ...rest }) => (
  <Animate type="goUp">
    <div className="p-aboutUs_visionMissionValue">
      <VisionMissionValue {...rest} />
    </div>
  </Animate>
);

export default VisionMissionValueContainer;
