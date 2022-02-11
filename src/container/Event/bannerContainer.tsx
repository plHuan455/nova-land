import React from 'react';

import RecruitmentBanner from 'assets/images/recruitment-banner.png';
import Heading from 'components/atoms/Heading';
import BannerRecruitment from 'components/templates/BannerRecruitment';

const BannerEventContainer: React.FC = () => (
  <div className="p-event_bannerEvent">
    <BannerRecruitment
      imageSrc={RecruitmentBanner}
    >
      <Heading modifiers={['52x65', 'white', 'center', 'fontNoto', '400']}>Lịch sự kiện</Heading>
    </BannerRecruitment>
  </div>
);

export default BannerEventContainer;
