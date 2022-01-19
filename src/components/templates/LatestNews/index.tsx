import React from 'react';

import Heading from 'components/atoms/Heading';
import Image from 'components/atoms/Image';
import Link from 'components/atoms/Link';
import Text from 'components/atoms/Text';
import Container from 'components/organisms/Container';

export interface LatestNewsCardProps {
  imgSrc: string;
  ratio: Ratio;
  alt?: string;
  title: string;
  time: string;
  href: string;
}

export const LatestNewsCard: React.FC<LatestNewsCardProps> = ({
  imgSrc,
  ratio,
  alt,
  title,
  time,
  href,
}) => (
  <div className="t-latestNewsCard">
    <Link href={href}>
      <div className="t-latestNewsCard_wrapper">
        <div className="t-latestNewsCard_image">
          <Image
            src={imgSrc}
            ratio={ratio}
            alt={alt}
          />
        </div>
        <div className="t-latestNewsCard_layer" />
        <div className="t-latestNewsCard_content">
          <div className="t-latestNewsCard_content_title">
            <Heading modifiers={['24x30', '600', 'white', 'uppercase']}>
              {title}
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

interface LatestNewsProps {
  dataLatestNews: LatestNewsCardProps[];
}

const LatestNews: React.FC<LatestNewsProps> = ({ dataLatestNews }) => (
  <div className="t-latestNews">
    <Container>
      <div className="t-latestNews_wrapper">
        <div className="t-latestNews_left">
          <LatestNewsCard {...dataLatestNews[0]} />
        </div>
        <div className="t-latestNews_right">
          {dataLatestNews.slice(1).map((item, index) => (
            <div className="t-latestNews_right_item" key={`latestNews-${index.toString()}`}>
              <LatestNewsCard {...item} />
            </div>
          ))}
        </div>
      </div>
    </Container>
  </div>
);

export default LatestNews;
