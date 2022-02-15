import React from 'react';

import Heading from 'components/atoms/Heading';
import BannerRecruitment from 'components/templates/BannerRecruitment';

export interface BannerInvestmentRelationsProps {
  src: string;
  srcTablet?: string;
  srcMobile?: string;
  title: string;
}

const BannerInvestmentRelations: React.FC<BannerInvestmentRelationsProps> = ({
  src,
  srcTablet,
  srcMobile,
  title,
}) => (
  <div className="p-corporateGovernance_bannerRecruitment">
    <BannerRecruitment
      imageSrc={src}
      imageTabletSrc={srcTablet}
      imageMobileSrc={srcMobile}
    >
      <Heading modifiers={['52x65', 'white', 'center', 'fontNoto', '400']}>{title}</Heading>
    </BannerRecruitment>
  </div>
);

export default BannerInvestmentRelations;
