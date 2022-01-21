import React from 'react';

import imgHeroBanner from 'assets/images/Banner/banner_1.png';
import Heading from 'components/atoms/Heading';
import HeroBanner from 'components/templates/HeroBanner';

const HeroBannerContainer: React.FC = () => (
  <div className="p-home_heroBanner">
    <HeroBanner
      list={new Array(1).fill({ src: imgHeroBanner })}
    >
      <div className="p-home_heroBanner_info">
        <div className="p-home_heroBanner_info_title">
          <Heading modifiers={['center', '400', '60x72', 'fontNoto', 'white']}>
            Cho cuộc sống bừng sáng
          </Heading>
        </div>
        <div className="p-home_heroBanner_info_caption">
          <Heading
            type="h5"
            modifiers={['center', 'white', '300', 'fontLexend']}
          >
            Kiến tạo cộng đồng -  Xây dựng điểm đến - Vun đắp niềm vui
          </Heading>
        </div>
      </div>
    </HeroBanner>
  </div>
);

export default HeroBannerContainer;
