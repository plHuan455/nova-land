import React, { useCallback, useMemo, useState } from 'react';
import { useQuery } from 'react-query';

import BreadcrumbContainer from './BreadcrumbContainer';
import ReportListBannerContainer from './ReportListBanner';
import ReportListTemplateContainer from './ReportListContainer';

import imgReport from 'assets/images/ReportList/img-report.png';
import { ReportTypes } from 'components/templates/ReportList';
import HelmetContainer from 'container/helmet';
import { getReportDataService } from 'services/report';
import { DEFAULT_QUERY_OPTION } from 'utils/constants';

const ReportListContainer: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const { isLoading, data: reportDataList } = useQuery(
    ['getReportData', currentPage],
    () => getReportDataService({
      limit: 6,
      page: currentPage,
    }),
    DEFAULT_QUERY_OPTION,
  );

  const reportData = useMemo(() => {
    let reportList: ReportTypes[] = [];
    let totalPages = 1;
    if (reportDataList) {
      reportList = reportDataList.data.map((item) => ({
        title: item.name,
        imageSrc: imgReport,
        file: item.file,
      }));
      totalPages = reportDataList.meta.totalPages;
    }
    return { reportList, totalPages };
  }, [reportDataList]);

  const handleChangePage = useCallback((page: number) => {
    setCurrentPage(page);
  }, []);

  return (
    <>
      <HelmetContainer />
      <ReportListBannerContainer />
      <BreadcrumbContainer />
      <ReportListTemplateContainer
        isLoading={isLoading}
        totalPage={reportData.totalPages}
        currentPage={currentPage}
        reportList={reportData.reportList}
        handleChangePage={handleChangePage}
      />
    </>
  );
};

export default ReportListContainer;
