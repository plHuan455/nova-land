import React from 'react';

import MainLayout from 'components/templates/MainLayout';
import CorporateGovernanceContainer from 'container/CorporateGovernance';

const CorporateGovernance: React.FC = () => (
  <MainLayout>
    <div className="p-corporateGovernance">
      <CorporateGovernanceContainer />
    </div>
  </MainLayout>
);

export default CorporateGovernance;
