import React from 'react';

import InvestmentRelations from './InvestmentRelationsOtherDocument';

import Breadcrumb from 'components/molecules/Breadcrumb';
import Section from 'components/templates/Section';
import BannerInvestmentRelations from 'container/InvestmentRelationsOtherDocument/bannerInvestmentRelationsOtherDocument';
import HelmetContainer from 'container/helmet';

const InvestmentRelationsOtherDocumentContainer: React.FC = () => (
  <>
    <HelmetContainer />
    <BannerInvestmentRelations />
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
            pathName: '/tai-lieu-khac',
            title: 'tài liệu khác',
          },
        ]}
      />
    </div>
    <Section modifiers="noPt">
      <InvestmentRelations />
    </Section>
  </>
);

export default InvestmentRelationsOtherDocumentContainer;
