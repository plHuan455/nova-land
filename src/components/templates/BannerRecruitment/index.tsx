import React from 'react';

import Image from 'components/atoms/Image';

interface BannerRecruitmentProps {
  imageSrc: string;
}

const BannerRecruitment: React.FC<BannerRecruitmentProps> = ({ imageSrc, children }) => (
  <div className="t-bannerRecruitment">
    <Image ratio="1366x250" src={imageSrc} alt="image-banner" />
    <div className="t-bannerRecruitment_info">
      {children}
    </div>
  </div>
);

BannerRecruitment.defaultProps = {
};

export default BannerRecruitment;
