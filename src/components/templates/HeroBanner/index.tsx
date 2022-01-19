import React from 'react';

import Heading from 'components/atoms/Heading';
import Image from 'components/atoms/Image';
import Animate from 'components/organisms/Animate';
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
  imgLogo?: string;
  ratioLogo?: Ratio;
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
  imgLogo,
  ratioLogo,
}) => (
  <div className="t-heroBanner">
    <Animate type="goUpHero">
      <Carousel settings={settingBanner}>
        {list.map((item, index) => (
          <Image key={`index-${index.toString()}`} {...item} ratio="1371x620" alt="image-banner" />
        ))}
      </Carousel>
      <div className="t-heroBanner_info">
        <div className="t-heroBanner_info_content">
          <div className="t-heroBanner_info_title">
            <Heading modifiers={['center', '400', '60x72', 'fontNoto', 'white']} content={title} />
          </div>
          <div className="t-heroBanner_info_caption">
            <Heading type="h5" modifiers={['center', 'white', '300', 'fontLexend']} content={caption} />
          </div>
        </div>
        {imgLogo && (
          <div className="t-heroBanner_info_image">
            <Image src={imgLogo} ratio={ratioLogo || '386x98'} />
          </div>
        )}
      </div>
    </Animate>
  </div>
);

HeroBanner.defaultProps = {
  title: undefined,
  caption: undefined,
  imgLogo: undefined,
  ratioLogo: undefined,
};

export default HeroBanner;
