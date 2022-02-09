import React from 'react';

import Breadcrumb from 'components/molecules/Breadcrumb';

const BreadcrumbContainer: React.FC = () => (
  <div className="p-corporateGovernance_breadcrumb u-mt-md-24 u-mt-14 u-mb-md-60 u-mb-25">
    <Breadcrumb
      pathNameHome="/"
      breadcrumbs={[
        {
          pathName: '/quan-he-dau-tu',
          title: 'Quan hệ đầu tư',
        },
        {
          pathName: '/quan-tri-danh-nghiep',
          title: 'Quản Trị Danh Nghiệp',
        },
      ]}
    />
  </div>
);

export default BreadcrumbContainer;
