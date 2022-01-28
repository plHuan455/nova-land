import React from 'react';

import MainLayout from 'components/templates/MainLayout';
import ReportListContainer from 'container/ReportList';

const ReportList: React.FC = () => (
  <MainLayout>
    <div className="p-reportList">
      <ReportListContainer />
    </div>
  </MainLayout>
);

export default ReportList;
