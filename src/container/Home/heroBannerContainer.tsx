import React, { Fragment } from 'react';

import Heading from 'components/atoms/Heading';
import Text from 'components/atoms/Text';
import HeroBanner from 'components/templates/HeroBanner';
import { convertBanner } from 'utils/functions';

interface BannerProps {
  banners: BannersDataTypes[];
}

const HeroBannerContainer: React.FC<BannerProps> = ({
  banners,
}) => (
  <div className="p-home_heroBanner">
    <HeroBanner list={convertBanner(banners)}>
      <div className="p-home_heroBanner_info">
        {banners && banners.map((item, idx) => (
          <Fragment key={idx.toString()}>
            <div className="p-home_heroBanner_info_title">
              <Heading modifiers={['center', '400', '64x83', 'fontNoto', 'white']}>
                {item.data.title}
              </Heading>
            </div>
            <div className="p-home_heroBanner_info_caption">
              <Text
                modifiers={['center', 'white', '300', 'fontLexend', '18x28']}
              >
                {item.data.subTitle}
              </Text>
            </div>
          </Fragment>
        ))}
      </div>
    </HeroBanner>
  </div>
);

export default HeroBannerContainer;
