import React from 'react';

import MainLayout from 'components/templates/MainLayout';
import CorporateGovernanceContainer from 'container/CorporateGovernance';

const CorporateGovernance: React.FC<BasePageData<[]>> = (props) => (
  <MainLayout>
    <div className="p-corporateGovernance">
      <CorporateGovernanceContainer {...props} />
    </div>
  </MainLayout>
);

export default CorporateGovernance;
