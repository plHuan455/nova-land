import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

import RenderPage from './RenderPage';
import RedirectNavigate from './redirectNavigate';

import Loading from 'components/atoms/Loading';
import { getPageService, getStaticHomeService } from 'services/navigations';
import { DEFAULT_QUERY_OPTION } from 'utils/constants';

const PageNavigate: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const {
    isLoading,
    data,
    isError,
  } = useQuery(
    ['GetPageData', slug],
    () => getPageService(slug || ''),
    {
      ...DEFAULT_QUERY_OPTION,
      enabled: !!slug,
    },
  );

  const { isLoading: isLoadingHome, error: homeError, data: homeData } = useQuery(
    ['GetPageData', slug],
    () => getStaticHomeService<any>(),
    {
      ...DEFAULT_QUERY_OPTION,
      enabled: !slug,
    },
  );

  if (isLoading || isLoadingHome) return <Loading isShow variant="fullScreen" />;

  if (isError || homeError) {
    return <RedirectNavigate error={isError || homeError} />;
  }

  return <RenderPage pageData={slug ? data : homeData} />;
};

export default PageNavigate;
