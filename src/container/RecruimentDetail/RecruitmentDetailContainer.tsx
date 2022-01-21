import React from 'react';

import {
  content, dataBanner, listInfoData, listRelatedJobData,
} from 'assets/dataDummy/recruimentDetail';
import RecruitmentDetail from 'components/templates/RecruitmentDetail';

const RecruitmentDetailContainer: React.FC = () => (
  <div className="p-recruitmentDetail_infomation">
    <RecruitmentDetail
      content={content}
      dataBanner={dataBanner}
      listInfo={listInfoData}
      listRelatedJob={listRelatedJobData}
      onClickApply={() => {}}
      onClickShare={() => {}}
    />
  </div>
);

export default RecruitmentDetailContainer;
