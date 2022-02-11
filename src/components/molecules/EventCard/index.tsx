import React from 'react';

import Icon from 'components/atoms/Icon';
import Image from 'components/atoms/Image';
import Link from 'components/atoms/Link';
import Text from 'components/atoms/Text';

export interface EventCardProps {
  imgSrc: string;
  alt?: string;
  title: string;
  description?: string;
  href: string;
  target?: string;
}

const EventCard: React.FC<EventCardProps> = ({
  imgSrc,
  alt,
  title,
  description,
  href,
  target,
}) => (
  <div className="m-eventCard">
    <div className="m-eventCard_thumbnail">
      <Image src={imgSrc} alt={alt || title} ratio="376x212" />
    </div>
    <div className="m-eventCard_content">
      <div className="m-eventCard_content-title">
        <Link href={href} target={target}>
          <Text modifiers={['600', '20x28', 'jet']} content={title} />
        </Link>
      </div>
      <div className="m-eventCard_content-desc">
        <Text modifiers={['400', '14x20', 'dimGray']}>{description}</Text>
      </div>
      <div className="m-eventCard_content_link">
        <Link href={href} target={target}>
          <div className="m-eventCard_content-btn">
            <Text modifiers={['400', 'camel', '14x20']}>Xem thêm</Text>
            <Icon iconName="arrowNextCamel" size="20" />
          </div>
        </Link>
      </div>
    </div>
  </div>
);

export default EventCard;
