import React from 'react';

import dataList from 'assets/dataDummy/outStandingNumbers';
import OutStandingNumbers from 'components/templates/OutStandingNumbers';

const OutStandingNumbersContainer: React.FC = () => (
  <div className="p-aboutUs_outStandingNumbers">
    <OutStandingNumbers
      title="Novaland là thương hiệu uy tín hàng đầu Việt Nam trong lĩnh vực đầu tư & phát triển bất động sản"
      dataList={dataList}
    />
  </div>
);

export default OutStandingNumbersContainer;
