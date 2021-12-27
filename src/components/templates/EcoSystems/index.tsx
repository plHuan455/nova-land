import React from 'react';

import Heading from 'components/atoms/Heading';
import Text from 'components/atoms/Text';
import EcoCard, { EcoCardProps } from 'components/molecules/EcoCard';
import Carousel, { NextArrow, PrevArrow } from 'components/organisms/Carousel';
import Container from 'components/organisms/Container';

interface EcoSystemsProps {
  title: string;
  desc: string;
  dataList: EcoCardProps[];
}

const EcoSystems: React.FC<EcoSystemsProps> = ({ title, desc, dataList }) => {
  const settingDefault = {
    dots: true,
    dotsClass: 'slick-dots o-carousel_dots',
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    infinite: false,
    cssEase: 'ease-in-out',
    customPaging() {
      return (
        <span className="o-carousel_dot" />
      );
    },
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 426,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="t-ecoSystems">
      <Container>
        <Heading modifiers={['32x48', '700', 'fontNoto', 'arsenic', 'uppercase', 'center']}>{title}</Heading>
        <div className="t-ecoSystems_desc">
          <Text modifiers={['400', 'center', 'davysGrey']}>
            {desc}
          </Text>
        </div>
        {dataList?.length > 0 && (
          <div className="t-ecoSystems_brands">
            <Carousel settings={settingDefault}>
              {dataList.map((item, idx) => (
                <div key={`ecoSystems-item-${idx.toString()}`} className="t-ecoSystems_brands-item">
                  <EcoCard {...item} />
                </div>
              ))}
            </Carousel>
          </div>
        )}
      </Container>
    </div>
  );
};
EcoSystems.defaultProps = {};

export default EcoSystems;
