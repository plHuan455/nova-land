import React from 'react';

import bannerNewsCategory from 'assets/images/Banner/banner_news_category.png';
import logoNovaWorldPhanThiet from 'assets/images/logo_novaworld_phanthiet.png';
import HeroBanner from 'components/templates/HeroBanner';

const HeroBannerContainer: React.FC = () => (
  <div className="p-newsCategory_heroBanner">
    <HeroBanner
      list={new Array(1).fill({ src: bannerNewsCategory })}
      imgLogo={logoNovaWorldPhanThiet}
      ratioLogo="386x98"
    />
  </div>
);

export default HeroBannerContainer;
