/* eslint-disable no-console */
import React from 'react';

import { departmentFilterRecruitOptions, locationFilterRecruitOptions, positionFilterRecruitOptions } from 'assets/dataDummy/filterGroupRecruitment';
import bg from 'assets/images/filterRecruitmentBg.png';
import FilterRecruitment from 'components/organisms/FilterRecruitment';
import HeroBanner from 'components/templates/HeroBanner';

const FilterRecruitmentContainer: React.FC = () => (
  <div className="p-recruitment_filterRecruitmentContainer">
    <HeroBanner list={new Array(5).fill({ src: bg })}>
      <FilterRecruitment
        heading="Novator"
        desc="Thu hút nhân tài, tạo dựng giá trị, tích lũy thành công"
        positionOptions={positionFilterRecruitOptions}
        locationOptions={locationFilterRecruitOptions}
        departmentOptions={departmentFilterRecruitOptions}
        handleSubmit={(val) => console.log(val)}
      />
    </HeroBanner>
  </div>
);

export default FilterRecruitmentContainer;
