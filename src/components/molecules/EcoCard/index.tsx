import React, { useState } from 'react';

import Icon from 'components/atoms/Icon';
import Link from 'components/atoms/Link';

export interface EcoCardProps {
  fieldImgSrc: string;
  brandImage: string;
  href: string;
  target?: string;
}

const EcoCard: React.FC<EcoCardProps> = ({
  fieldImgSrc,
  brandImage,
  href,
  target,
}) => {
  const [isHover, setIsHover] = useState<boolean>(false);

  return (
    <div
      className="m-ecoCard"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className="m-ecoCard_field">
        <img src={fieldImgSrc} alt="brand" sizes="contain" />
      </div>
      <div className="m-ecoCard_brands">
        <img src={brandImage} alt="brand" sizes="contain" />
      </div>
      <Link href={href} target={target}>
        <div className="m-ecoCard_btn">
          <Icon iconName={isHover ? 'arrowNextWhite' : 'arrowNextGray'} size="18" />
        </div>
      </Link>
    </div>
  );
};

export default EcoCard;
