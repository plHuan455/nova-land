import React from 'react';

import MainLayoutRecruitment from 'components/templates/MainLayoutRecruitment';
import RecruitmentContainer from 'container/Recruitment';

const Recruitment: React.FC = () => (
  <MainLayoutRecruitment>
    <div className="p-recruitment">
      <RecruitmentContainer />
    </div>
  </MainLayoutRecruitment>
);

export default Recruitment;
