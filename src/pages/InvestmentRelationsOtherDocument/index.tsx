import React from 'react';

import MainLayout from 'components/templates/MainLayout';
import InvestmentRelationsOtherDocumentContainer from 'container/InvestmentRelationsOtherDocument';

const InvestmentRelationsPage: React.FC = () => (
  <MainLayout>
    <div className="p-InvestmentRelationsPage">
      <InvestmentRelationsOtherDocumentContainer />
    </div>
  </MainLayout>
);

export default InvestmentRelationsPage;
