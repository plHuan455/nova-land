import React, { useCallback } from 'react';

import Loading from 'components/atoms/Loading';
import Pagination from 'components/molecules/Pagination';
import Container, { CustomCol, CustomRow } from 'components/organisms/Container';
import ReportCard from 'components/organisms/ReportCard';
import { downloadPdf } from 'utils/functions';

export interface ReportTypes {
  imageSrc?: string;
  title?: string;
  file?: string;
}

interface ReportListProps {
  reportList: Array<ReportTypes>;
  totalPage: number;
  currentPage?: number;
  isLoading?: boolean;
  handleChangePage?: (page: number) => void;
}

const ReportList: React.FC<ReportListProps> = ({
  reportList,
  totalPage,
  currentPage,
  isLoading,
  handleChangePage,
}) => {
  const onDownload = useCallback((file: string) => {
    downloadPdf(file);
  }, []);

  return (
    <div className="t-reportList">
      <Container>

        {isLoading ? (
          <div className="t-reportList_loading">
            <Loading isShow />
          </div>
        ) : (
          <>
            <CustomRow>
              {reportList.map((item, idx) => (
                <CustomCol xs="6" md="6" lg="4" key={`report-${idx.toString()}`}>
                  <ReportCard
                    imageSrc={item.imageSrc}
                    title={item.title}
                    fileUrl={item.file}
                    onDownload={() => onDownload(item.file || '')}
                  />
                </CustomCol>
              ))}
            </CustomRow>
            {totalPage > 0 && (
            <div className="t-reportList_pagination u-mt-10">
              <Pagination
                totalPage={totalPage}
                pageCurrent={currentPage}
                handleChangePage={(page: number) => handleChangePage && handleChangePage(page)}
              />
            </div>
            )}
          </>
        )}
      </Container>

    </div>
  );
};

ReportList.defaultProps = {
  currentPage: undefined,
  handleChangePage: undefined,
  isLoading: undefined,
};

export default ReportList;
