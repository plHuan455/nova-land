import React, { useMemo } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

import Breadcrumb from 'components/molecules/Breadcrumb';
import { getNewsDetailService } from 'services/newsDetail';
import { DEFAULT_QUERY_OPTION } from 'utils/constants';

const BreadcrumbContainer: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const { data: newsDetailData } = useQuery(
    ['GetNewsDetailData', slug],
    () => getNewsDetailService(slug || ''),
    {
      ...DEFAULT_QUERY_OPTION,
    },
  );
  const breadcrumb = useMemo(() => {
    if (newsDetailData) {
      return [
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
          pathName: newsDetailData.breadcrumbs[0].slug,
          title: newsDetailData?.title || '',
        },
      ];
    }
    return [];
  }, [newsDetailData]);
  return (
    <div className="p-eventDetail_breadcrumb u-mt-md-24 u-mb-md-27 u-mt-14 u-mb-16">
      <Breadcrumb
        pathNameHome="/"
        breadcrumbs={breadcrumb}
      />
    </div>
  );
};
export default BreadcrumbContainer;
