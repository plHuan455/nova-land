import React from 'react';

import MainLayoutRecruitmentContainer from 'container/MainLayoutRecruitment';
import RecruitmentDetailContainer from 'container/RecruimentDetail';

const RecruitmentDetail: React.FC = () => (
  <MainLayoutRecruitmentContainer>
    <div className="p-recruitmentDetail">
      <RecruitmentDetailContainer />
    </div>
  </MainLayoutRecruitmentContainer>
);

export default RecruitmentDetail;
