import React from 'react';

import Breadcrumb from 'components/molecules/Breadcrumb';

const BreadcrumbContainer: React.FC = () => (
  <div className="p-eventDetail_breadcrumb u-mt-md-24 u-mb-md-27 u-mt-14 u-mb-16">
    <Breadcrumb
      breadcrumbs={[
        {
          pathName: '/',
          title: 'Trang chủ',
        },
        {
          pathName: '/tin-tuc',
          title: 'Tin Tức',
        },
        {
          pathName: '/tin-du-an',
          title: 'Tin Dự Án',
        },
        {
          pathName: '/aqua-city',
          title: 'Aqua City',
        },
        {
          pathName: '/su-kien-chi-tiet',
          title: 'Đi tìm chuẩn sống La Dolce Vita ở Aqua City',
        },
      ]}
    />
  </div>
);

export default BreadcrumbContainer;
