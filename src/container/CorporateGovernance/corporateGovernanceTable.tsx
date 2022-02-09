import React from 'react';

import dataCorporateGovernanceList from 'assets/dataDummy/corporateGovernance';
import CorporateGovernance from 'components/templates/CorporateGovernance';

const CorporateGovernanceTableContainer: React.FC = () => (
  <div className="p-corporateGovernance_corporateGovernanceTable">
    <CorporateGovernance
      dataGeneral={dataCorporateGovernanceList}
    />
  </div>
);

export default CorporateGovernanceTableContainer;
