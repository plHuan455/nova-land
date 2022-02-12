import React from 'react';

import MainLayout from 'components/templates/MainLayout';
import InvestmentRelationsOtherDocumentContainer from 'container/InvestmentRelationsOtherDocument';

const InvestmentRelationsPage: React.FC<BasePageData<[]>> = (props) => (
  <MainLayout>
    <div className="p-InvestmentRelationsPage">
      <InvestmentRelationsOtherDocumentContainer {...props} />
    </div>
  </MainLayout>
);

export default InvestmentRelationsPage;
