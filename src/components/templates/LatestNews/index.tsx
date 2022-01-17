import React from 'react';

import Heading from 'components/atoms/Heading';
import Image from 'components/atoms/Image';
import Link from 'components/atoms/Link';
import Text from 'components/atoms/Text';

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
          <Heading modifiers={['24x30', '600', 'white', 'uppercase']}>
            {title}
          </Heading>
          <div className="t-latestNewsCard_content_time">
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
}

const LatestNews: React.FC<LatestNewsProps> = ({ children }) => (
  <div>{children}</div>
);

LatestNews.defaultProps = {
};

export default LatestNews;
