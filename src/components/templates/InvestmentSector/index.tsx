import React from 'react';

import Heading from 'components/atoms/Heading';
import Icon from 'components/atoms/Icon';
import Image from 'components/atoms/Image';
import Text from 'components/atoms/Text';
import Carousel, { PrevArrow, NextArrow } from 'components/organisms/Carousel';
import Container from 'components/organisms/Container';

export interface InvestmentCardProps {
  title: string;
  desc: string;
  thumbnail: string;
}

export const InvestmentCard: React.FC<InvestmentCardProps> = ({
  title, desc, thumbnail,
}) => (
  <div className="t-investmentCard">
    <div className="t-investmentCard_icon">
      <Icon iconName="building" size="61" />
    </div>
    <div className="t-investmentCard_content">
      <Heading
        modifiers={['32x48', '700', 'raisinBlack', 'uppercase']}
        content={title}
      />
      <div className="t-investmentCard_content_item">
        <Text
          modifiers={['arsenic', '400']}
          content={desc}
        />
      </div>
    </div>
    <div className="t-investmentCard_thumbnail">
      <Image
        src={thumbnail}
        alt="InvestmentCard"
        ratio="370x208"
      />
    </div>
  </div>
);

interface InvestmentSectorProps {
  title: string;
  investmentSectorList: InvestmentCardProps[];
}

const setting = {
  centerMode: true,
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
  speed: 500,
  centerPadding: '90',
  slidesPerRow: 1,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        centerPadding: '0',
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        slidesPerRow: 1,
      },
    },
    {
      breakpoint: 767,
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

const InvestmentSector: React.FC<InvestmentSectorProps> = ({
  title, investmentSectorList,
}) => (
  <div className="t-investmentSector">
    <div className="t-investmentSector_title">
      <Heading
        modifiers={['32x48', 'jet', '700', 'uppercase', 'center']}
        content={title}
      />
    </div>
    <div className="t-investmentSector_content">
      <Container>
        <Carousel settings={setting}>
          {
            investmentSectorList.map((item, index) => (
              <div className="t-investmentSector_item" key={`_investmentSector_${index.toString()}`}>
                <InvestmentCard
                  title={item.title}
                  desc={item.desc}
                  thumbnail={item.thumbnail}
                />
              </div>
            ))
          }
        </Carousel>
      </Container>
    </div>
  </div>
);

export default InvestmentSector;
