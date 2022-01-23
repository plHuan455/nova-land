import React, { useState } from 'react';

import dataRecruitmentPositionList from 'assets/dataDummy/recruitmentPositionList';
import RecruitmentPositionList from 'components/templates/RecruitmentPositionList';

const RecruitmentPositionListContainer: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="p-recruitmentList_recruitmentPositionList">
      <RecruitmentPositionList
        totalResults={39}
        dataRecruitmentPositionList={dataRecruitmentPositionList}
        totalPage={10}
        currentPage={currentPage}
        handleChangePage={(page: number) => setCurrentPage(page)}
      />
    </div>
  );
};

export default RecruitmentPositionListContainer;
