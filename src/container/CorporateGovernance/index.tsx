import React from 'react';

import BannerRecruitmentContainer from './bannerRecruitmentContainer';
import BreadcrumbContainer from './breadcrumbContainer';
import CorporateGovernanceTableContainer from './corporateGovernanceTable';

import Section from 'components/templates/Section';
import HelmetContainer from 'container/helmet';

const CorporateGovernanceContainer: React.FC = () => (
  <>
    <HelmetContainer />
    <BannerRecruitmentContainer />
    <BreadcrumbContainer />
    <Section modifiers="noPt">
      <CorporateGovernanceTableContainer />
    </Section>
  </>
);

export default CorporateGovernanceContainer;
