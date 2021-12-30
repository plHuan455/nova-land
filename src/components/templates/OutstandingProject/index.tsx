import React from 'react';

import Heading from 'components/atoms/Heading';
import Image from 'components/atoms/Image';
import Link from 'components/atoms/Link';
import Text from 'components/atoms/Text';
import Carousel, { PrevArrow, NextArrow } from 'components/organisms/Carousel';
import Container from 'components/organisms/Container';

export interface OutstandingProjectCardProps {
  imgSrc: string;
  title: string;
  href: string;
}

export const OutstandingProjectCard: React.FC<OutstandingProjectCardProps> = ({
  imgSrc, title, href,
}) => (
  <div className="t-outstandingProjectCard">
    <Link href={href}>
      <div className="t-outstandingProjectCard_thumbnail">
        <Image src={imgSrc} ratio="221x166" alt="OutstandingProjectCard" />
      </div>
      <div className="t-outstandingProjectCard_title">
        <Text
          modifiers={['16x24', 'arsenic', '400', 'fontLexend']}
          content={title}
        />
      </div>
    </Link>
  </div>
);

const setting = {
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
      breakpoint: 767,
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

interface OutstandingProjectProps {
  title: string;
  outstandingProjectList: OutstandingProjectCardProps[];
}

const OutstandingProject: React.FC<OutstandingProjectProps> = ({
  title, outstandingProjectList,
}) => (
  <div className="t-outstandingProject">
    <Container>
      <div className="t-outstandingProject_wrapper">
        <div className="t-outstandingProject_title">
          <Heading
            modifiers={['32x48', 'deer', '700', 'fontNoto', 'uppercase']}
            content={title}
          />
        </div>
        <div className="t-outstandingProject_content">
          <Carousel settings={setting}>
            {
              outstandingProjectList.map((item, index) => (
                <div
                  className="t-outstandingProject_item"
                  key={`outstandingProject-${index.toString()}`}
                >
                  <OutstandingProjectCard
                    {...item}
                  />
                </div>
              ))
            }
          </Carousel>
        </div>
      </div>
    </Container>
  </div>
);

export default OutstandingProject;