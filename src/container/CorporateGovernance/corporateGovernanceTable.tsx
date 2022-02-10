import React, { useState } from 'react';

import dataCorporateGovernanceList, { dataTitleTab } from 'assets/dataDummy/corporateGovernance';
import CorporateGovernance from 'components/templates/CorporateGovernance';

const CorporateGovernanceTableContainer: React.FC = () => {
  const [indexActive, setIndexActive] = useState(0);

  const handleChangeTab = (e: number) => {
    setIndexActive(e);
  };

  return (
    <div className="p-corporateGovernance_corporateGovernanceTable">
      <CorporateGovernance
        dataGeneral={dataCorporateGovernanceList}
        dataTabGeneral={dataTitleTab}
        tabActive={indexActive}
        handleChangeTab={handleChangeTab}
      />
    </div>
  );
};

export default CorporateGovernanceTableContainer;
