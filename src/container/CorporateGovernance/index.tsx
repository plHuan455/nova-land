import React from 'react';

import BannerRecruitmentContainer from './bannerRecruitmentContainer';
import CorporateGovernanceTableContainer from './corporateGovernanceTable';

import Breadcrumb from 'components/molecules/Breadcrumb';
import Section from 'components/templates/Section';
import HelmetContainer from 'container/helmet';

const CorporateGovernanceContainer: React.FC = () => (
  <>
    <HelmetContainer />
    <BannerRecruitmentContainer />
    <div className="p-corporateGovernance_breadcrumb u-mt-md-24 u-mt-14 u-mb-md-60 u-mb-25">
      <Breadcrumb
        breadcrumbs={[
          {
            pathName: '/',
            title: 'Trang chủ',
          },
          {
            pathName: '/quan-he-dau-tu',
            title: 'Quan hệ đầu tư',
          },
          {
            pathName: '/quan-tri-danh-nghiep',
            title: 'Quản Trị Danh Nghiệp',
          },
        ]}
      />
    </div>
    <Section modifiers="noPt">
      <CorporateGovernanceTableContainer />
    </Section>
  </>
);

export default CorporateGovernanceContainer;
