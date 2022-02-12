import React from 'react';

import reportList from 'assets/dataDummy/reportList';
import ReportList from 'components/templates/ReportList';
import Section from 'components/templates/Section';

const ReportListTemplateContainer: React.FC = () => (
  <div className="p-reportList_list">
    <Section modifiers="noPt">
      <ReportList
        totalPage={5}
        currentPage={1}
        reportList={reportList.ReportListDumy}
      />
    </Section>
  </div>
);

export default ReportListTemplateContainer;
