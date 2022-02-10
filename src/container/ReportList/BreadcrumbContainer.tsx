import React from 'react';

import reportList from 'assets/dataDummy/reportList';
import Breadcrumb from 'components/molecules/Breadcrumb';

const BreadcrumbContainer: React.FC = () => (
  <div className="p-reportList_breadcrumb u-mt-md-24 u-mb-md-24 u-mt-14 u-mb-16">
    <Breadcrumb
      breadcrumbs={reportList.breadcrumb}
    />
  </div>
);

export default BreadcrumbContainer;
