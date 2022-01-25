import React from 'react';

import BreadcrumbContainer from './BreadcrumbContainer';
import ReportListBannerContainer from './ReportListBanner';
import ReportListTemplateContainer from './ReportListContainer';

const ReportListContainer: React.FC = () => (
  <>
    <ReportListBannerContainer />
    <BreadcrumbContainer />
    <ReportListTemplateContainer />
  </>
);

export default ReportListContainer;
