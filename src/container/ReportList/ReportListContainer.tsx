import React from 'react';

import reportList from 'assets/dataDummy/reportList';
import ReportList from 'components/templates/ReportList';

const ReportListTemplateContainer: React.FC = () => (
  <div className="p-reportList_list">
    <ReportList
      totalPage={5}
      currentPage={1}
      reportList={reportList.ReportListDumy}
    />
  </div>
);

export default ReportListTemplateContainer;
