import React from 'react';

import dataList from 'assets/dataDummy/outStandingNumbers';
import Animate from 'components/organisms/Animate';
import OutStandingNumbers from 'components/templates/OutStandingNumbers';

const OutStandingNumbersContainer: React.FC = () => (
  <Animate type="goUp">
    <div className="p-aboutUs_outStandingNumbers">
      <OutStandingNumbers
        title="Novaland là thương hiệu uy tín hàng đầu Việt Nam trong lĩnh vực đầu tư & phát triển bất động sản"
        dataList={dataList}
      />
    </div>
  </Animate>
);

export default OutStandingNumbersContainer;
