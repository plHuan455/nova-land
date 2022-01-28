import React from 'react';

import BreadcrumbContainer from './BreadcrumbContainer';
import ReportListBannerContainer from './ReportListBanner';
import ReportListTemplateContainer from './ReportListContainer';

import HelmetContainer from 'container/helmet';

const ReportListContainer: React.FC = () => (
  <>
    <HelmetContainer />
    <ReportListBannerContainer />
    <BreadcrumbContainer />
    <ReportListTemplateContainer />
  </>
);

export default ReportListContainer;
