import React, { useMemo } from 'react';
import { useQuery } from 'react-query';

import BaseNewsContainer from './baseNewsContainer';
import LatestNewsContainer from './latestNewsContainer';

import HelmetContainer from 'container/helmet';
import { getNewsCategoryService, getNewsService } from 'services/home';
import { useAppSelector } from 'store/hooks';
import { DEFAULT_QUERY_OPTION } from 'utils/constants';

export type NewsData ={};

const NewsContainer: React.FC<BasePageData<NewsData>> = ({
  seoData,
  openGraphData,
}) => {
  const language = useAppSelector((state) => state.system.language);

  const { data: categoryNewsList } = useQuery(
    ['getCategoryNewsData', language],
    () => getNewsCategoryService(),
    {
      ...DEFAULT_QUERY_OPTION,
    },
  );

  const { data: latestNews } = useQuery(
    ['getLatestNewsData', language],
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
      <HelmetContainer seoData={seoData} ogData={openGraphData} />
      <LatestNewsContainer latestNewsData={latestNews?.data || []} />
      {categoryNewsList
        && categoryNewsList.length > 0
        && categoryNewsList.filter((item) => !item.parent).map((item, index) => (
          <BaseNewsContainer
            key={index.toString()}
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
