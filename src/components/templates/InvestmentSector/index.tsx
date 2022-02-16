import React, { useState } from 'react';

import Button from 'components/atoms/Button';
import Heading from 'components/atoms/Heading';
import Image from 'components/atoms/Image';
import Link from 'components/atoms/Link';
import Loading from 'components/atoms/Loading';
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
  btnText?: string;
  imgLogo: string;
  imgLogoHover?: string;
  target?: string;
}

export const InvestmentCard: React.FC<InvestmentCardProps> = ({
  title,
  desc,
  thumbnail,
  isSmall,
  href,
  btnText,
  imgLogo,
  imgLogoHover,
  target,
}) => {
  const [isHover, setIsHover] = useState<boolean>(false);

  return (
    <div
      className={mapModifiers('t-investmentCard', isSmall && 'small')}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className="t-investmentCard_main">
        <div
          className={mapModifiers(
            't-investmentCard_icon',
            isHover && 'isHover',
          )}
        >
          <Image
            src={isHover ? imgLogoHover || imgLogo : imgLogo}
            alt="InvestmentCard-Logo"
            ratio="1x1"
          />
        </div>
        <div className="t-investmentCard_title">
          <Heading
            modifiers={
              isSmall
                ? ['16x24', '600', 'jet', 'uppercase', 'fontNoto']
                : ['24x30', '600', 'jet', 'uppercase', 'fontNoto']
            }
            content={title}
          />
        </div>
        <div className="t-investmentCard_desc">
          <Text modifiers={['jet333', '300']} content={desc} />
        </div>
        <div className="t-investmentCard_thumbnail">
          <Image src={thumbnail} alt="InvestmentCard" ratio="228x145" />
          <div className="t-investmentCard_thumbnail_button">
            <Link href={href} target={target || '_blank'}>
              <Button modifiers="outlineWhile" type="button">
                <Text
                  modifiers={['16x24', '300', 'capitalize', 'center']}
                  content={btnText}
                />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export interface InvestmentSectorProps {
  title: string;
  investmentSectorList: InvestmentCardProps[];
  isSmall?: boolean;
  loading?: boolean;
}

const setting = {
  centerMode: true,
  infinite: true,
  slidesToShow: 4,
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
  title,
  investmentSectorList,
  isSmall,
  loading,
}) => {
  const settingSmall = {
    centerMode: true,
    infinite: true,
    slidesToShow:
      investmentSectorList.length <= 4 ? investmentSectorList.length : 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    speed: 500,
    slidesPerRow: 1,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 991,
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

  return (
    <div className={mapModifiers('t-investmentSector', isSmall && 'small')}>
      <Container>
        <div className="u-mb-lg-52 u-mb-sm-40 u-mb-24">
          <Heading
            modifiers={[
              '32x48',
              'jet',
              '500',
              'uppercase',
              'center',
              'fontNoto',
            ]}
            content={title}
          />
        </div>
        <div className="t-investmentSector_content">
          {loading ? (
            <Loading isShow />
          ) : (
            <Carousel settings={isSmall ? settingSmall : setting}>
              {investmentSectorList.map((item, index) => (
                <div
                  className="t-investmentSector_item"
                  key={`_investmentSector_${index.toString()}`}
                >
                  <InvestmentCard {...item} isSmall={isSmall} />
                </div>
              ))}
            </Carousel>
          )}
        </div>
      </Container>
    </div>
  );
};
export default InvestmentSector;
