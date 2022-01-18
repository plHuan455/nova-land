import React, { useState } from 'react';

import Icon from 'components/atoms/Icon';
import Link from 'components/atoms/Link';

type BrandItemType = {
  imgSrc: string;
}

export interface EcoCardProps {
  fieldImgSrc: string;
  brandList: BrandItemType[];
  href: string;
}

const EcoCard: React.FC<EcoCardProps> = ({ fieldImgSrc, brandList, href }) => {
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
      {brandList.length > 0 && (
        <div className="m-ecoCard_brands">
          {brandList.map((item, idx) => (
            <div key={`brand-item-${idx.toString()}`} className="m-ecoCard_brands-item">
              <img src={item.imgSrc} alt="brand" sizes="contain" />
            </div>
          ))}
        </div>
      )}
      <Link href={href}>
        <div className="m-ecoCard_btn">
          <Icon iconName={isHover ? 'arrowNextWhite' : 'arrowNextGray'} size="18" />
        </div>
      </Link>
    </div>
  );
};

export default EcoCard;
