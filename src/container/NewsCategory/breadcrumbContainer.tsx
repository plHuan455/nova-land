import React from 'react';

import breadcrumb from 'assets/dataDummy/breadcrumb';
import Breadcrumb from 'components/molecules/Breadcrumb';

const BreadcrumbContainer: React.FC = () => (
  <div className="p-newsCategory_breadcrumb u-mt-md-24 u-mb-md-27 u-mt-14 u-mb-16">
    <Breadcrumb
      pathNameHome="/"
      breadcrumbs={breadcrumb}
    />
  </div>
);

export default BreadcrumbContainer;
