import React from 'react';

import Image from 'components/atoms/Image';
import Animate from 'components/organisms/Animate';
import Carousel, { NextArrow, PrevArrow } from 'components/organisms/Carousel';

type HeroBannerItem = {
  src: string;
  srcTablet?: string;
  srcMobile?: string;
}

interface HeroBannerProps {
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
  list,
  children,
}) => (
  <div className="t-heroBanner">
    <Animate type="goUpHero">
      <Carousel settings={settingBanner}>
        {list.map((item, index) => (
          <Image key={`index-${index.toString()}`} {...item} ratio="1371x620" alt="image-banner" />
        ))}
      </Carousel>
      <div className="t-heroBanner_info">
        {children}
      </div>
    </Animate>
  </div>
);

export default HeroBanner;
