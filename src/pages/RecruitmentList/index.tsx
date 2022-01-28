import React from 'react';

import MainLayoutRecruitment from 'components/templates/MainLayoutRecruitment';
import RecruitmentListContainer from 'container/RecruitmentList';

const RecruitmentList: React.FC = () => (
  <MainLayoutRecruitment>
    <div className="p-recruitmentList">
      <RecruitmentListContainer />
    </div>
  </MainLayoutRecruitment>
);

export default RecruitmentList;
