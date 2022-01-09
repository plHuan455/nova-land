import React from 'react';

import dataList from 'assets/dataDummy/visionMissionValue';
import VisionMissionValue from 'components/templates/VisionMissionValue';

const VisionMissionValueContainer: React.FC = () => (
  <div className="p-aboutUs_visionMissionValue">
    <VisionMissionValue dataList={dataList} />
  </div>
);

export default VisionMissionValueContainer;
