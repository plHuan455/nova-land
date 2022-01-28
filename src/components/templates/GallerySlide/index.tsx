import React from 'react';

import Heading from 'components/atoms/Heading';
import Icon from 'components/atoms/Icon';
import Image from 'components/atoms/Image';
import Link from 'components/atoms/Link';
import Text from 'components/atoms/Text';
import Animate from 'components/organisms/Animate';
import Carousel, { PrevArrow, NextArrow } from 'components/organisms/Carousel';
import Container from 'components/organisms/Container';

export interface GallerySlideProps {
  title: string;
  desc: string;
  target?: string;
  href: string;
  nameBtn?: string;
  imgList: Array<string>;
}

const setting = {
  centerMode: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
  speed: 500,
  centerPadding: '160',
  slidesPerRow: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        centerPadding: '100',
      },
    },
    {
      breakpoint: 991,
      settings: {
        centerPadding: '0',
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        slidesPerRow: 1,
      },
    },
  ],
};

const GallerySlide: React.FC<GallerySlideProps> = ({
  title,
  desc,
  target,
  href,
  nameBtn,
  imgList,
}) => (
  <div className="t-gallerySlide">
    <Container>
      <div className="t-gallerySlide_wrapper">
        <div className="t-gallerySlide_left u-pr-lg-50 u-pr-md-30 u-pr-0">
          <Animate type="fadeInLeft">
            <Heading modifiers={['40x56', '500', 'jet', 'uppercase', 'fontNoto']}>
              {title}
            </Heading>
            <div className="t-gallerySlide_left_desc u-mt-xl-20 u-mt-10">
              <Text modifiers={['16x24', '300', 'dimGray']}>
                {desc}
              </Text>
            </div>
            <div className="t-gallerySlide_left_btn u-mt-xl-20 u-mt-10">
              <Link href={href} target={target}>
                <div className="t-gallerySlide_left_btn_wrap">
                  <Text modifiers={['14x20', '300', 'camel']}>
                    {nameBtn || 'Xem vị trí trên bản đồ'}
                  </Text>
                  <div className="t-gallerySlide_left_btn_icon u-ml-10">
                    <Icon iconName="arrowNextYellowBrown" size="16" />
                  </div>
                </div>
              </Link>
            </div>
          </Animate>
        </div>
        <div className="t-gallerySlide_right">
          <Animate type="fadeInRight">
            <Carousel settings={setting}>
              {
                imgList.map((item, index) => (
                  <div
                    className="t-gallerySlide_right_item"
                    key={`gallerySlide-${index.toString()}`}
                  >
                    <Image src={item} ratio="490x276" />
                  </div>
                ))
              }
            </Carousel>
          </Animate>
        </div>
      </div>
    </Container>
  </div>
);

export default GallerySlide;
