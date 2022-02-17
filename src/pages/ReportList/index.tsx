import React from 'react';

import MainLayout from 'components/templates/MainLayout';
import ReportListContainer from 'container/ReportList';

const ReportList: React.FC<BasePageData<[]>> = (props) => (
  <MainLayout>
    <div className="p-reportList">
      <ReportListContainer {...props} />
    </div>
  </MainLayout>
);

export default ReportList;
