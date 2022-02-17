import React, { useMemo, useState } from 'react';
import { useQuery } from 'react-query';

import ReportListTemplateContainer from './ReportListContainer';

import imgReport from 'assets/images/ReportList/img-report.png';
import Heading from 'components/atoms/Heading';
import Breadcrumb from 'components/molecules/Breadcrumb';
import BannerRecruitment from 'components/templates/BannerRecruitment';
import { ReportTypes } from 'components/templates/ReportList';
import HelmetContainer from 'container/helmet';
import { getReportDataService } from 'services/report';
import { useAppSelector } from 'store/hooks';
import { getBreadcrumbs } from 'utils/breadcrumbs';
import { DEFAULT_QUERY_OPTION } from 'utils/constants';
import { convertBanner } from 'utils/functions';

const ReportListContainer: React.FC<BasePageData<[]>> = ({
  banners,
  breadcrumbs,
  openGraphData,
  pageData,
  seoData,
}) => {
  const language = useAppSelector((state) => state.system.language);
  const convertedBanner = convertBanner(banners);
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
  return (
    <>
      <HelmetContainer ogData={openGraphData} seoData={seoData} />
      <div className="p-reportList_banner">
        <BannerRecruitment
          imageSrc={convertedBanner[0]?.src || ''}
          imageTabletSrc={convertedBanner[0].srcTablet}
          imageMobileSrc={convertedBanner[0].srcMobile}
        >
          <Heading modifiers={['52x65', 'white', 'center', 'fontNoto', '400']}>{banners[0].data.title}</Heading>
        </BannerRecruitment>
      </div>
      <div className="p-reportList_breadcrumb u-mt-md-24 u-mb-md-24 u-mt-14 u-mb-16">
        <Breadcrumb
          breadcrumbs={getBreadcrumbs({
            breadcrumbs: breadcrumbs || [],
            language,
            title: pageData.title || '',
          })}
        />
      </div>
      <ReportListTemplateContainer
        isLoading={isLoading}
        totalPage={reportData.totalPages}
        currentPage={currentPage}
        reportList={reportData.reportList}
        handleChangePage={(page: number) => setCurrentPage(page)}
      />
    </>
  );
};

export default ReportListContainer;
