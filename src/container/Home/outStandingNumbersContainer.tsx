import React from 'react';

import outStandingNumbersData from 'assets/dataDummy/outStandingNumbers';
import Animate from 'components/organisms/Animate';
import OutStandingNumbers from 'components/templates/OutStandingNumbers';

const OutStandingNumbersContainer: React.FC = () => (
  <Animate type="goUp">
    <div className="p-home_outStandingNumbers">
      <OutStandingNumbers
        title="Novaland là thương hiệu uy tín hàng đầu Việt Nam trong lĩnh vực đầu tư & phát triển bất động sản"
        dataList={outStandingNumbersData}
      />
    </div>
  </Animate>
);

export default OutStandingNumbersContainer;
