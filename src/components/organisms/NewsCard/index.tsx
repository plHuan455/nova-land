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
  desc?: string;
  target?: string;
  href: string;
  variant?: 'vertical' | 'horizontal' | 'smallVertical';
  modifiers?: 'smallTitle',
}

const NewsCard: React.FC<NewsCardProps> = ({
  imgSrc,
  alt,
  title,
  desc,
  time,
  href,
  variant,
  modifiers,
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
    <div className={mapModifiers('o-newsCard', variant, modifiers)}>
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
              {modifiers === 'smallTitle' ? (
                <Text modifiers={['jet', '600', 'fontLexend', '16x24']}>
                  {title}
                </Text>
              )
                : (
                  <Heading modifiers={variant === 'smallVertical' ? ['jet', '24x30', '400', 'fontLexend'] : ['white', 'fontLexend', '600', '24x30']}>
                    {title}
                  </Heading>
                )}
            </div>
            {desc
            && (
            <div className="o-newsCard_content_desc">
              <Text modifiers={['dimGray', '16x24', '400']}>
                {desc}
              </Text>
            </div>
            )}
            <div className="o-newsCard_content_time mt-8">
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
