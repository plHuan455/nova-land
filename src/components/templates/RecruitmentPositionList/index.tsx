import React from 'react';

import Text from 'components/atoms/Text';
import Pagination from 'components/molecules/Pagination';
import RecruitmentPositionCard,
{ RecruitmentPositionCardProps } from 'components/organisms/RecruitmentPositionCard';

interface RecruitmentPositionListProps {
  totalResults?: number;
  dataRecruitmentPositionList: RecruitmentPositionCardProps[];
  totalPage: number;
  currentPage?: number;
  handleChangePage?: (page: number) => void;
}

const RecruitmentPositionList: React.FC<RecruitmentPositionListProps> = ({
  totalResults,
  dataRecruitmentPositionList,
  totalPage,
  currentPage,
  handleChangePage,
}) => (
  <div className="t-recruitmentPositionList">
    <div className="t-recruitmentPositionList_top u-mb-lg-24 u-mb-16">
      <div className="t-recruitmentPositionList_top_results">
        <Text modifiers={['20x28', '300', 'darkMidnightBlue', 'capitalize']}>
          {totalResults ? `Có ${totalResults} vị trí đang tuyển dụng` : 'Vị trí đang tuyển dụng' }
        </Text>
      </div>
      {totalPage > 0 && (
        <div className="t-recruitmentPositionList_top_pagination">
          <Pagination
            totalPage={totalPage}
            pageCurrent={currentPage}
            handleChangePage={(page: number) => handleChangePage && handleChangePage(page)}
          />
        </div>
      )}
    </div>
    {dataRecruitmentPositionList.length > 0 && (
      <div className="t-recruitmentPositionList_between">
        {dataRecruitmentPositionList.map((item, index) => (
          <div
            className="t-recruitmentPositionList_between_item"
            key={`recruitmentPositionList-${index.toString()}`}
          >
            <RecruitmentPositionCard {...item} />
          </div>
        ))}
      </div>
    )}
    {totalPage > 0 && (
      <div className="t-recruitmentPositionList_bottom u-mt-lg-24 u-mt-16">
        <div className="t-recruitmentPositionList_bottom_wrapper">
          <Pagination
            totalPage={totalPage}
            pageCurrent={currentPage}
            handleChangePage={(page: number) => handleChangePage && handleChangePage(page)}
          />
        </div>
      </div>
    )}
  </div>
);

RecruitmentPositionList.defaultProps = {
  totalResults: undefined,
  currentPage: undefined,
  handleChangePage: undefined,
};

export default RecruitmentPositionList;
