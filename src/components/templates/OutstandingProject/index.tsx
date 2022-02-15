import React from 'react';

import Heading from 'components/atoms/Heading';
import Image from 'components/atoms/Image';
import Link from 'components/atoms/Link';
import Text from 'components/atoms/Text';
import { AnimateCarousel } from 'components/organisms/Animate';
import Carousel, { PrevArrow, NextArrow } from 'components/organisms/Carousel';
import Container from 'components/organisms/Container';
import Section from 'components/templates/Section';
import { checkExternalUrl } from 'utils/functions';

export interface OutstandingProjectCardProps {
  imgSrc: string;
  title: string;
  href: string;
  target?: string;
}

export const OutstandingProjectCard: React.FC<OutstandingProjectCardProps> = ({
  imgSrc,
  title,
  href,
  target,
}) => (
  <div className="t-outstandingProjectCard">
    <Link href={href} target={target} useExternal={checkExternalUrl(href)}>
      <div className="t-outstandingProjectCard_thumbnail">
        <Image src={imgSrc} ratio="221x166" alt={title} />
      </div>
      <div className="t-outstandingProjectCard_title">
        <Text modifiers={['16x24', 'arsenic', '300', 'fontLexend']} content={title} />
      </div>
    </Link>
  </div>
);

const setting = {
  infinite: false,
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

export interface OutstandingProjectProps {
  title: string;
  outstandingProjectList: OutstandingProjectCardProps[];
}

const OutstandingProject: React.FC<OutstandingProjectProps> = ({
  title,
  outstandingProjectList,
}) => (
  <div className="t-outstandingProject">
    <Section>
      <Container>
        <div className="t-outstandingProject_wrapper">
          <div className="t-outstandingProject_title">
            <AnimateCarousel type="fadeInLeft">
              <Heading
                modifiers={['32x48', 'camel', '500', 'fontNoto', 'uppercase']}
                content={title}
              />
            </AnimateCarousel>
          </div>
          <div className="t-outstandingProject_content">
            <AnimateCarousel type="fadeInRight">
              {outstandingProjectList.length > 0 && (
                <Carousel settings={setting}>
                  {outstandingProjectList.map((item, index) => (
                    <div
                      className="t-outstandingProject_item"
                      key={`outstandingProject-${index.toString()}`}
                    >
                      <OutstandingProjectCard {...item} />
                    </div>
                  ))}
                </Carousel>
              )}
            </AnimateCarousel>
          </div>
        </div>
      </Container>
    </Section>
  </div>
);
export default OutstandingProject;
