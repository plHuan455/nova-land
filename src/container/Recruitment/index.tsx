import React from 'react';

import BranchListContainer from './branchListComponent';
import CompanyProfileContainer from './companyProfile';
import FilterRecruitmentContainer from './filterRecuitmentContainer';
import LatestJobsContainer from './latestJobsContainer';
import SignUpJobPostingsContainer from './signUpJobPostings';
import VisionMissionValueContainer from './visionMissionValueContainer';
import WorkEnvironmentContainer from './workEnvironmentContainer';

import Section from 'components/templates/Section';

const RecruitmentContainer: React.FC = () => (
  <>
    <Section>
      <FilterRecruitmentContainer />
    </Section>
    <Section>
      <BranchListContainer />
    </Section>
    <Section>
      <LatestJobsContainer />
    </Section>
    <Section>
      <CompanyProfileContainer />
    </Section>
    <Section>
      <VisionMissionValueContainer />
    </Section>
    <Section>
      <WorkEnvironmentContainer />
    </Section>
    <Section>
      <SignUpJobPostingsContainer />
    </Section>
  </>
);

export default RecruitmentContainer;
