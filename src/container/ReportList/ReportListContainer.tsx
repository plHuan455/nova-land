import React from 'react';

import ReportList, { ReportTypes } from 'components/templates/ReportList';
import Section from 'components/templates/Section';

export interface ReportListProps{
  isLoading?: boolean;
  totalPage: number;
  currentPage?: number;
  reportList: Array<ReportTypes>;
  handleChangePage?: (page: number) => void;
}

const ReportListTemplateContainer: React.FC<ReportListProps> = ({
  isLoading,
  totalPage,
  currentPage,
  reportList,
  handleChangePage,
}) => (
  <div className="p-reportList_list">
    <Section modifiers="noPt">
      <ReportList
        totalPage={totalPage}
        currentPage={currentPage}
        isLoading={isLoading}
        reportList={reportList}
        handleChangePage={handleChangePage}
      />
    </Section>
  </div>
);

export default ReportListTemplateContainer;
