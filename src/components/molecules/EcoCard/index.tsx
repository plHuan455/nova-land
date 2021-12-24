import React from 'react';

import Button from 'components/atoms/Button';
import Icon from 'components/atoms/Icon';
import Image from 'components/atoms/Image';

type BrandItemType = {
  imgSrc: string;
}

interface EcoCardProps {
  fieldImgSrc: string;
  brandList: BrandItemType[];
  handleClick?: () => void;
}

const EcoCard: React.FC<EcoCardProps> = ({ fieldImgSrc, brandList, handleClick }) => (
  <div className="m-ecoCard">
    <div className="m-ecoCard_field">
      <Image src={fieldImgSrc} ratio="179x120" alt="field" />
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
    <div className="m-ecoCard_btn">
      <Button onClick={handleClick}>
        <Icon iconName="arrowNextWhite" />
      </Button>
    </div>
  </div>
);

EcoCard.defaultProps = {
  handleClick: undefined,
};

export default EcoCard;
