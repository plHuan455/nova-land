import React, { useEffect, useCallback } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

import BreadcrumbContainer from './breadcrumbContainer';
import CategoryGeneralContainer from './categoryGeneralContainer';
import HeroBannerContainer from './heroBannerContainer';

import Loading from 'components/atoms/Loading';
import Error from 'components/templates/Error';
import HelmetContainer from 'container/helmet';
import { getNewsServiceDummy, getNewsService } from 'services/home';
import { DEFAULT_QUERY_OPTION } from 'utils/constants';

const NewsCategoryContainer: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  // lát có api sáng nói thì đổi lại
  // const { data: newsCategory, isLoading, error } = useQuery(
  //   ['getNewsCategory', slug], () => getNewsServiceDummy({ category_slug: slug }),
  //   DEFAULT_QUERY_OPTION,
  // );

  if (isLoading) return <Loading isShow variant="fullScreen" />;

  if (error) return <Error statusCode={404} btnHomeText="Trở về trang chủ" />;

  return (
    <>
      <HelmetContainer />
      <HeroBannerContainer />
      <BreadcrumbContainer />
      <CategoryGeneralContainer />
    </>
  );
};

export default NewsCategoryContainer;
