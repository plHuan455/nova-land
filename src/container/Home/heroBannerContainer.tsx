import React from 'react';

import Heading from 'components/atoms/Heading';
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
    <div className="p-home_heroBanner">
      <HeroBanner list={convertBanner()}>
        <div className="p-home_heroBanner_info">
          {banners && banners.map((item) => (
            <>
              <div className="p-home_heroBanner_info_title">
                <Heading modifiers={['center', '400', '64x83', 'fontNoto', 'white']}>
                  {item.data.title}
                </Heading>
              </div>
              <div className="p-home_heroBanner_info_caption">
                <Heading
                  type="h5"
                  modifiers={['center', 'white', '300', 'fontLexend', '18x28']}
                >
                  {item.data.subTitle}
                </Heading>
              </div>
            </>
          ))}
        </div>
      </HeroBanner>
    </div>
  );
};

export default HeroBannerContainer;
