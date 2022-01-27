import React from 'react';

import MainLayoutRecruitmentContainer from 'container/MainLayoutRecruitment';
import RecruitmentListContainer from 'container/RecruitmentList';

const RecruitmentList: React.FC = () => (
  <MainLayoutRecruitmentContainer>
    <div className="p-recruitmentList">
      <RecruitmentListContainer />
    </div>
  </MainLayoutRecruitmentContainer>
);

export default RecruitmentList;
