import React from 'react';

import HeroBanner from 'components/templates/HeroBanner';
import { getImageURL } from 'utils/functions';

interface BannerProps {
  banners: BannersDataTypes[];
}

const HeroBannerContainer: React.FC<BannerProps> = ({
  banners,
}) => {
  const convertBanner = () => {
    if (banners.length > 0) {
      return banners.map((item) => ({
        src: getImageURL(item.data.imageDesktop),
        srcTablet: getImageURL(item.data.imageMobile),
        srcMobile: getImageURL(item.data.imageTablet),
      }));
    }
    return [];
  };

  return (
    <div className="p-fieldOfActivity_heroBanner">
      <HeroBanner
        list={convertBanner()}
      />
    </div>
  );
};

export default HeroBannerContainer;
