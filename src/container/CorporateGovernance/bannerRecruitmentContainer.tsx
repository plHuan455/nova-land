import React from 'react';

import Heading from 'components/atoms/Heading';
import BannerRecruitment, { BannerRecruitmentProps } from 'components/templates/BannerRecruitment';

interface BannerRecruitmentContainerProps extends BannerRecruitmentProps {
  title: string;
}

const BannerRecruitmentContainer: React.FC<BannerRecruitmentContainerProps> = ({
  title,
  imageSrc,
  imageTabletSrc,
  imageMobileSrc,
}) => (
  <div className="p-corporateGovernance_bannerRecruitment">
    <BannerRecruitment
      imageSrc={imageSrc}
      imageTabletSrc={imageTabletSrc}
      imageMobileSrc={imageMobileSrc}
    >
      <Heading modifiers={['52x65', 'white', 'center', 'fontNoto', '400']}>{title}</Heading>
    </BannerRecruitment>
  </div>
);

export default BannerRecruitmentContainer;
