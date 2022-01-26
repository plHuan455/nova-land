import React from 'react';

import bg from 'assets/images/filterRecruitmentBg.png';
import FilterRecruitment from 'components/organisms/FilterRecruitment';

const FilterRecruitmentContainer: React.FC = () => (
  <div className="p-recruitment_filterRecruitmentContainer">
    <FilterRecruitment
      heading="Novator"
      desc="Thu hút nhân tài, tạo dựng giá trị, tích lũy thành công"
      backgroundSrc={bg}
    />
  </div>
);

export default FilterRecruitmentContainer;
