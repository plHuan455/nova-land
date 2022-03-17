import React from 'react';

import MainLayout from 'components/templates/MainLayout';
import TermsPolicyContainer, { TermsPolicyBlock } from 'container/TermsPolicy';

const TermsPolicy: React.FC<BasePageData<TermsPolicyBlock>> = (props) => (
  <MainLayout>
    <div className="p-termsPolicy">
      <TermsPolicyContainer {...props} />
    </div>
  </MainLayout>
);
export default TermsPolicy;
