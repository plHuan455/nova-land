import React from 'react';

import imgHeroBanner from 'assets/images/Banner/banner_1.png';
import Heading from 'components/atoms/Heading';
import Text from 'components/atoms/Text';
import HeroBanner from 'components/templates/HeroBanner';

const HeroBannerContainer: React.FC = () => (
  <div className="p-home_heroBanner">
    <HeroBanner
      list={new Array(1).fill({ src: imgHeroBanner })}
    >
      <div className="p-home_heroBanner_info">
        <div className="p-home_heroBanner_info_title">
          <Heading modifiers={['center', '400', '64x83', 'fontNoto', 'white']}>
            Cho cuộc sống bừng sáng
          </Heading>
        </div>
        <div className="p-home_heroBanner_info_caption">
          <Text
            modifiers={['center', 'white', '300', 'fontLexend', '18x28']}
          >
            Kiến tạo cộng đồng -  Xây dựng điểm đến - Vun đắp niềm vui
          </Text>
        </div>
      </div>
    </HeroBanner>
  </div>
);

export default HeroBannerContainer;
