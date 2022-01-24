import React from 'react';

import imgBanner from 'assets/images/img-banner-reportlist.png';
import Heading from 'components/atoms/Heading';
import BannerRecruitment from 'components/templates/BannerRecruitment';

const ReportListBannerContainer: React.FC = () => (
  <div className="p-reportList_banner">
    <BannerRecruitment
      imageSrc={imgBanner}
    >
      <Heading modifiers={['52x65', 'white', 'center', 'fontNoto']}>Báo cáo thường niên</Heading>
    </BannerRecruitment>
  </div>
);

export default ReportListBannerContainer;
