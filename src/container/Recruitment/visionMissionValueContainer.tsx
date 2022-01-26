import React from 'react';

import dataList from 'assets/dataDummy/visionMissionValue';
import Section from 'components/templates/Section';
import VisionMissionValue from 'components/templates/VisionMissionValue';

const VisionMissionValueContainer: React.FC = () => (
  <div className="p-recruitment_visionMissionValueContainer">
    <Section>
      <VisionMissionValue dataList={dataList} />
      a
    </Section>
  </div>
);

export default VisionMissionValueContainer;
