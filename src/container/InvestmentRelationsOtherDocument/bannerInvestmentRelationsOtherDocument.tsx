import React from 'react';

import imgCorporateGovernance from 'assets/images/corporate-governance-banner.png';
import Heading from 'components/atoms/Heading';
import BannerRecruitment from 'components/templates/BannerRecruitment';

const BannerRecruitmentContainer: React.FC = () => (
  <div className="p-corporateGovernance_bannerRecruitment">
    <BannerRecruitment
      imageSrc={imgCorporateGovernance}
    >
      <Heading modifiers={['52x65', 'white', 'center', 'fontNoto', '400']}>Quản Trị Doanh Nghiệp</Heading>
    </BannerRecruitment>
  </div>
);

export default BannerRecruitmentContainer;
