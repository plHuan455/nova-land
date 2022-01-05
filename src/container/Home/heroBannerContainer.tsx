import React from 'react';

import imgHeroBanner from 'assets/images/Banner/banner_1.png';
import HeroBanner from 'components/templates/HeroBanner';

const HeroBannerContainer: React.FC = () => (
  <div className="p-home_heroBanner">
    <HeroBanner
      list={new Array(1).fill({ src: imgHeroBanner })}
      title="Cho cuộc sống bừng sáng"
      caption="Kiến tạo cộng đồng -  Xây dựng điểm đến - Vun đắp niềm vui"
    />
  </div>
);

export default HeroBannerContainer;
