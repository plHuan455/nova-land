import React from 'react';

import RecruitmentBanner from 'assets/images/recruitment-banner.png';
import Heading from 'components/atoms/Heading';
import BannerRecruitment from 'components/templates/BannerRecruitment';

const BannerRecruitmentContainer: React.FC = () => (
  <div className="p-recruitmentList_bannerRecruitment">
    <BannerRecruitment
      imageSrc={RecruitmentBanner}
    >
      <Heading modifiers={['52x65', 'white', 'center', 'fontCalibri', '700']}>Cơ hội nghề nghiệp</Heading>
    </BannerRecruitment>
  </div>
);

export default BannerRecruitmentContainer;
