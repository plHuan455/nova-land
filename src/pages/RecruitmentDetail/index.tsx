import React from 'react';

import MainLayoutRecruitment from 'components/templates/MainLayoutRecruitment';
import RecruitmentDetailContainer from 'container/RecruimentDetail';

const RecruitmentDetail: React.FC = () => (
  <MainLayoutRecruitment>
    <div className="p-recruitmentDetail">
      <RecruitmentDetailContainer />
    </div>
  </MainLayoutRecruitment>
);

export default RecruitmentDetail;
