import React, { useState } from 'react';

import Icon from 'components/atoms/Icon';
import Link from 'components/atoms/Link';
import { checkExternalUrl } from 'utils/functions';

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
        <img src={fieldImgSrc} alt="brand" sizes="cover" />
      </div>
      <div className="m-ecoCard_brands">
        <img src={brandImage} alt="brand" sizes="cover" />
      </div>
      <Link href={href} target={target} useExternal={checkExternalUrl(href)}>
        <div className="m-ecoCard_btn">
          <Icon iconName={isHover ? 'arrowNextWhite' : 'arrowNextGray'} size="18" />
        </div>
      </Link>
    </div>
  );
};

export default EcoCard;
