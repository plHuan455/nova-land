import React from 'react';

import eventPage from 'assets/dataDummy/eventPage';
import Breadcrumb from 'components/molecules/Breadcrumb';

const BreadcrumbContainer: React.FC = () => (
  <div className="p-event_breadcrumb u-mt-md-24 u-mb-md-24 u-mt-14 u-mb-16">
    <Breadcrumb
      pathNameHome="/"
      breadcrumbs={eventPage.breadCrumb}
    />
  </div>
);

export default BreadcrumbContainer;
