import React from 'react';

import MainLayoutContainer from 'container/MainLayout';
import ReportListContainer from 'container/ReportList';

const ReportList: React.FC = () => (
  <MainLayoutContainer>
    <div className="p-reportList">
      <ReportListContainer />
    </div>
  </MainLayoutContainer>
);

export default ReportList;
