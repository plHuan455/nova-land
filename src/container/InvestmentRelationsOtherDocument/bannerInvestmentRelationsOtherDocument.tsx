import React from 'react';

import imgCorporateGovernance from 'assets/images/corporate-governance-banner.png';
import Heading from 'components/atoms/Heading';
import BannerRecruitment from 'components/templates/BannerRecruitment';

const BannerInvestmentRelations: React.FC = () => (
  <div className="p-corporateGovernance_bannerRecruitment">
    <BannerRecruitment
      imageSrc={imgCorporateGovernance}
    >
      <Heading modifiers={['52x65', 'white', 'center', 'fontNoto', '400']}>Tài Liệu Khác</Heading>
    </BannerRecruitment>
  </div>
);

export default BannerInvestmentRelations;
