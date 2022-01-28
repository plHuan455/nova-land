import React from 'react';

import RecruitmentDetailContainerTemplate from './RecruitmentDetailContainer';
import SignupJobPostingsContainer from './SignupJobPostingsContainer';

import HelmetContainer from 'container/helmet';

const RecruitmentDetailContainer: React.FC = () => (
  <>
    <HelmetContainer />
    <RecruitmentDetailContainerTemplate />
    <SignupJobPostingsContainer />
  </>
);

export default RecruitmentDetailContainer;
