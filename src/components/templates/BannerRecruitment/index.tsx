import React from 'react';

import Image from 'components/atoms/Image';

export interface BannerRecruitmentProps {
  imageSrc: string;
  imageTabletSrc?: string;
  imageMobileSrc?: string;
}

const BannerRecruitment: React.FC<BannerRecruitmentProps> = ({
  imageSrc,
  imageTabletSrc,
  imageMobileSrc,
  children,
}) => (
  <div className="t-bannerRecruitment">
    <Image
      ratio="1366x250"
      src={imageSrc}
      srcTablet={imageTabletSrc}
      srcMobile={imageMobileSrc}
      alt="image-banner"
    />
    <div className="t-bannerRecruitment_info">
      {children}
    </div>
  </div>
);

export default BannerRecruitment;
