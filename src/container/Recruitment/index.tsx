import React from 'react';

import BranchListContainer from './branchListComponent';
import CompanyProfileContainer from './companyProfile';
import FilterRecruitmentContainer from './filterRecuitmentContainer';
import LatestJobsContainer from './latestJobsContainer';
import SignUpJobPostingsContainer from './signUpJobPostings';
import VisionMissionValueContainer from './visionMissionValueContainer';
import WorkEnvironmentContainer from './workEnvironmentContainer';

const RecruitmentContainer: React.FC = () => (
  <>
    <section>
      <FilterRecruitmentContainer />
    </section>
    <section>
      <BranchListContainer />
    </section>
    <section>
      <LatestJobsContainer />
    </section>
    <section>
      <CompanyProfileContainer />
    </section>
    <section>
      <VisionMissionValueContainer />
    </section>
    <section>
      <WorkEnvironmentContainer />
    </section>
    <section>
      <SignUpJobPostingsContainer />
    </section>
  </>
);

export default RecruitmentContainer;
