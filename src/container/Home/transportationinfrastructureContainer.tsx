import React from 'react';

import bannerImg from 'assets/images/banner2.png';
import TransportationInfrastructure from 'components/templates/TransportationInfrastructure';

const TransportationContainer: React.FC = () => (
  <div className="p-home_investSector pt-100">
    <TransportationInfrastructure
      title="Hạ tầng giao thông"
      desc="Nâng cấp, phát triển hạ tầng giao thông tại nơi có dự án nhằm gia tăng tính kết nối vào hạ tầng giao thông trọng điểm quốc gia."
      imgSrc={bannerImg}
    />
  </div>
);

export default TransportationContainer;