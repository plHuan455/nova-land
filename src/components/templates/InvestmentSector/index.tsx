import React from 'react';

import Button from 'components/atoms/Button';
import Heading from 'components/atoms/Heading';
import Icon from 'components/atoms/Icon';
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
  descDetail: string;
}

export const InvestmentCard: React.FC<InvestmentCardProps> = ({
  title, desc, thumbnail, isSmall, href, descDetail,
}) => (
  <div className={mapModifiers('t-investmentCard', isSmall && 'small')}>
    <div className="t-investmentCard_icon">
      <Icon iconName="building" size={isSmall ? '40' : '61'} />
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
    <div className="t-investmentCard_desc">
      <Text
        modifiers={['arsenic', '400', 'fontLexend']}
        content={desc}
      />
    </div>
    <div className="t-investmentCard_thumbnail">
      <Image
        src={thumbnail}
        alt="InvestmentCard"
        ratio={isSmall ? '226x127' : '370x208'}
      />
    </div>
    <div className="t-investmentCard_detail">
      <div className="t-investmentCard_iconDetail">
        <Icon iconName="buildingBlue" size={isSmall ? '40' : '61'} />
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
      <div className="t-investmentCard_descDetail">
        <Text
          modifiers={['white', '400', 'fontLexend']}
          content={descDetail}
        />
      </div>
      <div className="t-investmentCard_button">
        <Link href={href}>
          <Button modifiers="secondary" type="button">
            <Text
              modifiers={['16x24', 'black085', 'fontLexend', '400', 'capitalize', 'center']}
              content="Tìm Hiểu Thêm"
            />
          </Button>
        </Link>
      </div>
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
        modifiers={['32x48', 'jet', '700', 'uppercase', 'center', 'fontNoto']}
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
                  {...item}
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
