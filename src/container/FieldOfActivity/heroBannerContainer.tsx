import React from 'react';

import HeroBanner from 'components/templates/HeroBanner';
import { convertBanner } from 'utils/functions';

interface BannerProps {
  banners: BannersDataTypes[];
}

const HeroBannerContainer: React.FC<BannerProps> = ({
  banners,
}) => (
  <div className="p-fieldOfActivity_heroBanner">
    <HeroBanner
      list={convertBanner(banners)}
    />
  </div>
);

export default HeroBannerContainer;
