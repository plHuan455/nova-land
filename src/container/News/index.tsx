import React from 'react';
import { useQuery } from 'react-query';

import CorporateNewsContainer from './corporateNewsContainer';
import LatestNewsContainer from './latestNewsContainer';
import MarketNewsContainer from './marketNewsContainer';
import ProjectNewsContainer from './projectNewsContainer';

import HelmetContainer from 'container/helmet';
import { getNewsCategoryService } from 'services/home';
import { DEFAULT_QUERY_OPTION } from 'utils/constants';

const NewsContainer: React.FC = () => {
  const { data: categoryNewsList } = useQuery(
    'getCategoryNewsData',
    () => getNewsCategoryService(),
    {
      ...DEFAULT_QUERY_OPTION,
    },
  );
  return (
    <>
      <HelmetContainer />
      <LatestNewsContainer />
      <CorporateNewsContainer cateSlug={categoryNewsList ? categoryNewsList[1].slug : 'tin-tap-doan'} />
      <MarketNewsContainer cateSlug={categoryNewsList ? categoryNewsList[2].slug : 'tin-thi-truong'} />
      <ProjectNewsContainer cateSlug={categoryNewsList ? categoryNewsList[0].slug : 'tin-du-an'} />
    </>
  );
};

export default NewsContainer;
