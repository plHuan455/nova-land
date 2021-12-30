import React from 'react';

import bannerImg from 'assets/images/banner2.png';
import TransportationInfrastructure from 'components/templates/TransportationInfrastructure';
import VisionMissionValue from 'components/templates/VisionMissionValue';
import { dataList } from 'components/templates/VisionMissionValue/index.stories';

interface AboutUSContainerProps {
}

const AboutUSContainer: React.FC<AboutUSContainerProps> = () => (
  <div className="p-aboutUSContainer">
    <div className="p-aboutUSContainer_banner">
      {/* Banner */}
    </div>
    <div className="p-aboutUSContainer_visionMission">
      <VisionMissionValue dataList={dataList} />
    </div>
    <div className="p-aboutUSContainer_">
      {/* 17.04 */}
    </div>
    <div className="p-aboutUSContainer_">
      {/* 17.02 */}
    </div>
    <div className="p-aboutUSContainer_visionMission">
      <TransportationInfrastructure
        imgSrc={bannerImg}
        title="HẠ TẦNG GIAO THÔNG"
        desc="Nâng cấp, phát triển hạ tầng giao thông tại nơi có dự án nhằm gia tăng tính kết nối vào hạ tầng giao thông trọng điểm quốc gia."
      />
    </div>
    <div className="p-aboutUSContainer_">
      {/* 09.03 */}
    </div>
    <div className="p-aboutUSContainer_">
      {/* 32.02 */}
    </div>
    <div className="p-aboutUSContainer_">
      {/* 31.02 */}
    </div>
    <div className="p-aboutUSContainer_">
      {/* 14.03 */}
    </div>
    <div className="p-aboutUSContainer_">
      {/* 10.01 */}
    </div>
    <div className="p-aboutUSContainer_">
      {/* 15.01 */}
    </div>
    <div />
  </div>
);

export default AboutUSContainer;
