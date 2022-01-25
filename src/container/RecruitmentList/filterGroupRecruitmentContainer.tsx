import React from 'react';

import dataFilterList from 'assets/dataDummy/filterGroupRecruitment';
import FilterGroupRecruitment from 'components/templates/FilterGroupRecruitment';

const FilterGroupRecruitmentContainer: React.FC = () => (
  <div className="p-recruitmentList_filterGroupRecruitment">
    <FilterGroupRecruitment
      titleMain="Bộ Lọc"
      dataFilterList={dataFilterList}
    />
  </div>
);

export default FilterGroupRecruitmentContainer;
