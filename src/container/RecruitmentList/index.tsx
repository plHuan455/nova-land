import React from 'react';

import BannerRecruitmentContainer from './bannerRecruitmentContainer';
import FilterGroupRecruitmentContainer from './filterGroupRecruitmentContainer';
import RecruitmentPositionListContainer from './recruitmentPositionListContainer';
import SignupJobPostingsContainer from './signupJobPostingsContainer';

import Container from 'components/organisms/Container';

const RecruitmentListContainer: React.FC = () => (
  <>
    <BannerRecruitmentContainer />
    <div className="p-recruitmentList_general u-mt-lg-60 u-mt-30 u-mb-lg-60 u-mb-30">
      <Container>
        <div className="p-recruitmentList_wrapper">
          <FilterGroupRecruitmentContainer />
          <RecruitmentPositionListContainer />
        </div>
      </Container>
    </div>
    <SignupJobPostingsContainer />
  </>
);

export default RecruitmentListContainer;
