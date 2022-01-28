import React from 'react';

import BranchListContainer from './branchListComponent';
import CompanyProfileContainer from './companyProfile';
import FilterRecruitmentContainer from './filterRecuitmentContainer';
import LatestJobsContainer from './latestJobsContainer';
import SignUpJobPostingsContainer from './signUpJobPostings';
import VisionMissionValueContainer from './visionMissionValueContainer';
import WorkEnvironmentContainer from './workEnvironmentContainer';

import HelmetContainer from 'container/helmet';

const RecruitmentContainer: React.FC = () => (
  <>
    <HelmetContainer />
    <FilterRecruitmentContainer />
    <BranchListContainer />
    <LatestJobsContainer />
    <CompanyProfileContainer />
    <VisionMissionValueContainer />
    <WorkEnvironmentContainer />
    <SignUpJobPostingsContainer />
  </>
);

export default RecruitmentContainer;
