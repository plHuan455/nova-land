import React, { useCallback } from 'react';

import Heading from 'components/atoms/Heading';
import Image from 'components/atoms/Image';
import Link from 'components/atoms/Link';
import Text from 'components/atoms/Text';
import mapModifiers from 'utils/functions';

export interface NewsCardProps {
  imgSrc: string;
  alt?: string;
  title: string;
  time: string;
  href: string;
  variant?: 'vertical' | 'horizontal' | 'smallVertical';
}

const NewsCard: React.FC<NewsCardProps> = ({
  imgSrc,
  alt,
  title,
  time,
  href,
  variant,
}) => {
  const checkRatio = useCallback(() => {
    switch (variant) {
      case 'vertical':
        return '582x534' as Ratio;
      case 'horizontal':
        return '582x252' as Ratio;
      case 'smallVertical':
        return '185x142' as Ratio;
      default:
        return '185x142' as Ratio;
    }
  }, [variant]);

  return (
    <div className={mapModifiers('o-newsCard', variant)}>
      <Link href={href}>
        <div className="o-newsCard_wrapper">
          <div className="o-newsCard_image">
            <Image
              src={imgSrc}
              ratio={checkRatio()}
              alt={alt}
            />
          </div>
          <div className="o-newsCard_layer" />
          <div className="o-newsCard_content">
            <div className="o-newsCard_content_title">
              <Heading modifiers={variant === 'smallVertical' ? ['jet', '24x30', '400', 'fontLexend'] : ['white', 'fontLexend', '600', '24x30']}>
                {title}
              </Heading>
            </div>
            <div className="mt-8">
              <Text modifiers={[variant === 'smallVertical' ? 'dimGray' : 'columbiaBlue', '12x17', '400', 'fontLexend']}>
                {time}
              </Text>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

NewsCard.defaultProps = {};

export default NewsCard;
