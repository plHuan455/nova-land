import React, { useMemo } from 'react';
import { useQuery } from 'react-query';

import BaseNewsContainer from './baseNewsContainer';
import LatestNewsContainer from './latestNewsContainer';
// import MarketNewsContainer from './marketNewsContainer';
// import ProjectNewsContainer from './projectNewsContainer';

import HelmetContainer from 'container/helmet';
import { getNewsCategoryService, getNewsService } from 'services/home';
import { DEFAULT_QUERY_OPTION } from 'utils/constants';

const NewsContainer: React.FC = () => {
  const { data: categoryNewsList } = useQuery(
    'getCategoryNewsData',
    () => getNewsCategoryService(),
    {
      ...DEFAULT_QUERY_OPTION,
    },
  );

  const { data: latestNews } = useQuery(
    'getLatestNewsData',
    () => getNewsService({ is_popular: true, limit: '3' }),
    {
      ...DEFAULT_QUERY_OPTION,
    },
  );
  // console.log(latestNews?.data.map((i) => i.id).join(','));
  const convertExceptIds = useMemo(() => {
    if (latestNews && latestNews?.data.length > 0) {
      return latestNews.data.map((i) => i.id).join(',');
    }
    return '';
  }, [latestNews]);
  return (
    <>
      <HelmetContainer />
      <LatestNewsContainer latestNewsData={latestNews?.data || []} />
      {categoryNewsList
        && categoryNewsList.length > 0
        && categoryNewsList?.map((item) => (
          <BaseNewsContainer
            title={item.name}
            btnText={`Xem thêm ${item.name}`}
            cateSlug={item.children.length > 0 ? item.children[0].slug : item.slug}
            tabList={item.children}
            exceptIds={convertExceptIds}
          />
        ))}
    </>
  );
};

export default NewsContainer;
