import React, { useMemo } from 'react';
import { useQuery } from 'react-query';

import BaseNewsContainer from './baseNewsContainer';
import LatestNewsContainer from './latestNewsContainer';

import HelmetContainer from 'container/helmet';
import { getNewsCategoryService, getNewsService } from 'services/home';
import { DEFAULT_QUERY_OPTION } from 'utils/constants';

export type NewsData ={};

const NewsContainer: React.FC<BasePageData<NewsData>> = ({
  seoData,
}) => {
  const { data: categoryNewsList } = useQuery(
    'getCategoryNewsData',
    () => getNewsCategoryService(),
    {
      ...DEFAULT_QUERY_OPTION,
    },
  );

  const { data: latestNews } = useQuery(
    'getLatestNewsData',
    () => getNewsService({ is_popular: true, limit: 3 }),
    {
      ...DEFAULT_QUERY_OPTION,
    },
  );

  const convertExceptIds = useMemo(() => {
    if (latestNews && latestNews?.data.length > 0) {
      return latestNews.data.map((i) => i.id).join(',');
    }
    return '';
  }, [latestNews]);

  return (
    <>
      <HelmetContainer seoData={seoData} />
      <LatestNewsContainer latestNewsData={latestNews?.data || []} />
      {categoryNewsList
        && categoryNewsList.length > 0
        && categoryNewsList?.map((item) => (
          <BaseNewsContainer
            title={item.name}
            activeTab={item.children.length > 0 ? item.children[0] : item}
            tabList={item.children}
            exceptIds={convertExceptIds}
          />
        ))}
    </>
  );
};

export default NewsContainer;
