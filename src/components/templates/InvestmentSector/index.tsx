import React, { useState } from 'react';

import Button from 'components/atoms/Button';
import Heading from 'components/atoms/Heading';
import Icon, { IconName } from 'components/atoms/Icon';
import Image from 'components/atoms/Image';
import Link from 'components/atoms/Link';
import Text from 'components/atoms/Text';
import Carousel, { PrevArrow, NextArrow } from 'components/organisms/Carousel';
import Container from 'components/organisms/Container';
import mapModifiers from 'utils/functions';

export interface InvestmentCardProps {
  title: string;
  desc: string;
  thumbnail: string;
  isSmall?: boolean;
  href: string;
  icon: IconName;
  iconActive: IconName,
  btnText?: string;
}

export const InvestmentCard: React.FC<InvestmentCardProps> = ({
  title, desc, thumbnail, isSmall, href, icon, iconActive, btnText,
}) => {
  const [classHover, setClassHover] = useState('');

  return (
    <div
      className={mapModifiers('t-investmentCard', isSmall && 'small')}
      onMouseEnter={() => setClassHover('animate animate-backInLeft')}
      onMouseLeave={() => setClassHover('animate animate-backOutLeft')}
    >
      <div className="t-investmentCard_main">
        <div className="t-investmentCard_icon">
          <Icon iconName={icon} size={isSmall ? '80' : '120'} />
        </div>
        <div className="t-investmentCard_title">
          <Heading
            modifiers={
                isSmall ? ['20x30', '400', 'raisinBlack', 'uppercase', 'fontNoto']
                  : ['32x48', '700', 'raisinBlack', 'uppercase', 'fontNoto']
              }
            content={title}
          />
        </div>
        <div className="t-investmentCard_desc t-investmentCard_desc-main">
          <Text
            modifiers={['arsenic', '400', 'fontLexend']}
            content={desc}
          />
        </div>
        <div className="t-investmentCard_thumbnail">
          <Image
            src={thumbnail}
            alt="InvestmentCard"
            ratio="16x9"
          />
        </div>
      </div>
      <div className={`t-investmentCard_layer ${classHover}`}>
        <div className="t-investmentCard_icon">
          <Icon iconName={iconActive} size={isSmall ? '80' : '120'} />
        </div>
        <div className="t-investmentCard_title">
          <Heading
            modifiers={
                isSmall ? ['20x30', '400', 'white', 'uppercase', 'fontNoto']
                  : ['32x48', '700', 'white', 'uppercase', 'fontNoto']
              }
            content={title}
          />
        </div>
        <div className="t-investmentCard_desc t-investmentCard_desc-layer">
          <Text
            modifiers={['white', '400', 'fontLexend']}
            content={desc}
          />
        </div>
        <div className="t-investmentCard_button">
          <Link href={href}>
            <Button modifiers="secondary" type="button">
              <Text
                modifiers={['16x24', 'black085', 'fontLexend', '400', 'capitalize', 'center']}
                content={btnText}
              />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

interface InvestmentSectorProps {
  title: string;
  investmentSectorList: InvestmentCardProps[];
  isSmall?: boolean;
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

const settingSmall = {
  centerMode: true,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
  speed: 500,
  slidesPerRow: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const InvestmentSector: React.FC<InvestmentSectorProps> = ({
  title, investmentSectorList, isSmall,
}) => (
  <div className={mapModifiers('t-investmentSector', isSmall && 'small')}>
    <Container>
      <div className="u-mb-lg-52 u-mb-sm-40 u-mb-24">
        <Heading
          modifiers={['32x48', 'jet', '700', 'uppercase', 'center', 'fontNoto']}
          content={title}
        />
      </div>
      <div className="t-investmentSector_content">
        <Carousel settings={isSmall ? settingSmall : setting}>
          {
            investmentSectorList.map((item, index) => (
              <div className="t-investmentSector_item" key={`_investmentSector_${index.toString()}`}>
                <InvestmentCard
                  {...item}
                  isSmall={isSmall}
                />
              </div>
            ))
          }
        </Carousel>
      </div>
    </Container>
  </div>
);

InvestmentSector.defaultProps = {
  isSmall: false,
};

export default InvestmentSector;
