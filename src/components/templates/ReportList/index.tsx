import React from 'react';

import Pagination from 'components/molecules/Pagination';
import Container, { CustomCol, CustomRow } from 'components/organisms/Container';
import ReportCard from 'components/organisms/ReportCard';

interface ReportTypes {
  imageSrc?: string;
  title?: string;
}

interface ReportListProps {
  reportList: Array<ReportTypes>;
  totalPage: number;
  currentPage?: number;
  handleChangePage?: (page: number) => void;
}

const ReportList: React.FC<ReportListProps> = ({
  reportList,
  totalPage,
  currentPage,
  handleChangePage,
}) => (
  <div className="t-reportList">
    <Container>
      <CustomRow>
        {reportList.map((item, idx) => (
          <CustomCol xs="6" md="6" lg="4" key={`report-${idx.toString()}`}>
            <ReportCard imageSrc={item.imageSrc} title={item.title} />
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
    </Container>

  </div>
);

ReportList.defaultProps = {
  currentPage: undefined,
  handleChangePage: undefined,
};

export default ReportList;
