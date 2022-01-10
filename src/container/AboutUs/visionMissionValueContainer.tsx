import React from 'react';

import dataList from 'assets/dataDummy/visionMissionValue';
import Animate from 'components/organisms/Animate';
import VisionMissionValue from 'components/templates/VisionMissionValue';

const VisionMissionValueContainer: React.FC = () => (
  <Animate type="goUp">
    <div className="p-aboutUs_visionMissionValue">
      <VisionMissionValue dataList={dataList} />
    </div>
  </Animate>
);

export default VisionMissionValueContainer;
