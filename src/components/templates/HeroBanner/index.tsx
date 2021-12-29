import React from 'react';

import Heading from 'components/atoms/Heading';
import Image from 'components/atoms/Image';
import Carousel, { NextArrow, PrevArrow } from 'components/organisms/Carousel';

type HeroBannerItem = {
  src: string;
  srcTablet?: string;
  srcMobile?: string;
}

interface HeroBannerProps {
  title?: string;
  caption?: string;
  list: HeroBannerItem[];
}

const settingBanner = {
  dots: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: <PrevArrow extendClassname="t-heroBanner_arrow-prev" />,
  nextArrow: <NextArrow extendClassname="t-heroBanner_arrow-next" />,
  infinite: false,
  cssEase: 'ease-in-out',
};

const HeroBanner: React.FC<HeroBannerProps> = ({
  title,
  caption,
  list,
}) => (
  <div className="t-heroBanner">
    <Carousel settings={settingBanner}>
      {list.map((item, index) => (
        <Image key={`index-${index.toString()}`} {...item} ratio="1371x620" alt="image-banner" />
      ))}
    </Carousel>
    <div className="t-heroBanner_info">
      <div className="t-heroBanner_info_content">
        <div className="t-heroBanner_info_title">
          <Heading modifiers={['center', '700', '60x72', 'fontNoto', 'white']} content={title} />
        </div>
        <div className="t-heroBanner_info_caption">
          <Heading type="h5" modifiers={['center', 'white', '400']} content={caption} />
        </div>
      </div>
    </div>
  </div>
);

HeroBanner.defaultProps = {
  title: undefined,
  caption: undefined,
};

export default HeroBanner;
