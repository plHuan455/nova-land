import React from 'react';

import imgHeroBanner from 'assets/images/Banner/banner_home.png';
import HeroBanner from 'components/templates/HeroBanner';

const HeroBannerContainer: React.FC = () => (
  <div className="p-aboutUs_heroBanner">
    <HeroBanner
      list={new Array(1).fill({ src: imgHeroBanner })}
    />
  </div>
);

export default HeroBannerContainer;
