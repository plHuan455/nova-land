import React from 'react';

import Heading from 'components/atoms/Heading';
import Image from 'components/atoms/Image';
import Link from 'components/atoms/Link';
import Text from 'components/atoms/Text';
import Container from 'components/organisms/Container';

export interface FeaturedNewsCardProps {
  imgSrc: string;
  ratio: Ratio;
  alt?: string;
  title: string;
  time: string;
  href: string;
}

export const FeaturedNewsCard: React.FC<FeaturedNewsCardProps> = ({
  imgSrc,
  ratio,
  alt,
  title,
  time,
  href,
}) => (
  <div className="t-featuredNewsCard">
    <Link href={href}>
      <div className="t-featuredNewsCard_wrapper">
        <div className="t-featuredNewsCard_image">
          <Image
            src={imgSrc}
            ratio={ratio}
            alt={alt}
          />
        </div>
        <div className="t-featuredNewsCard_layer" />
        <div className="t-featuredNewsCard_content">
          <div className="t-featuredNewsCard_content_title">
            <Heading modifiers={['24x30', '600', 'white', 'capitalize']}>
              {title.toLocaleLowerCase()}
            </Heading>
          </div>
          <div className="mt-8">
            <Text modifiers={['12x17', '300', 'columbiaBlue']}>
              {time}
            </Text>
          </div>
        </div>
      </div>
    </Link>
  </div>
);

interface FeaturedNewsProps {
  dataFeaturedNews: FeaturedNewsCardProps[];
}

const FeaturedNews: React.FC<FeaturedNewsProps> = ({ dataFeaturedNews }) => (
  <div className="t-featuredNews">
    <Container>
      <div className="t-featuredNews_wrapper">
        {
          dataFeaturedNews.length > 0
          && (
            <>
              <div className="t-featuredNews_left">
                <FeaturedNewsCard
                  {...dataFeaturedNews[0]}
                  ratio="582x534"
                />
              </div>
              <div className="t-featuredNews_right">
                {dataFeaturedNews.slice(1).map((item, index) => (
                  <div className="t-featuredNews_right_item" key={`featuredNews-${index.toString()}`}>
                    <FeaturedNewsCard
                      {...item}
                      ratio="582x252"
                    />
                  </div>
                ))}
              </div>
            </>
          )
        }
      </div>
    </Container>
  </div>
);

export default FeaturedNews;
