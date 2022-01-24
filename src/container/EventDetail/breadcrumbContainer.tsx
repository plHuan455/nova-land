import React from 'react';

import Breadcrumb from 'components/molecules/Breadcrumb';

const BreadcrumbContainer: React.FC = () => (
  <div className="p-eventDetail_breadcrumb u-mt-md-24 u-mb-md-27 u-mt-14 u-mb-16">
    <Breadcrumb
      pathNameHome="/"
      breadcrumbs={[
        {
          pathName: '/quan-he-dau-tu',
          title: 'Quan hệ đầu tư',
        },
        {
          pathName: '/lich-su-kien',
          title: 'Lịch Sự Kiện',
        },
        {
          pathName: '/su-kien-chi-tiet',
          title: 'Novaland tiếp tục tổ chức loạt sự kiện nghệ thuật',
        },
      ]}
    />
  </div>
);

export default BreadcrumbContainer;
