import React from 'react';

import MainLayoutRecruitmentContainer from 'container/MainLayoutRecruitment';
import RecruitmentContainer from 'container/Recruitment';

const Recruitment: React.FC = () => (
  <MainLayoutRecruitmentContainer>
    <div className="p-recruitment">
      <RecruitmentContainer />
    </div>
  </MainLayoutRecruitmentContainer>
);

export default Recruitment;
