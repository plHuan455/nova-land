import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

import CategoryGeneralContainer from './categoryGeneralContainer';

import Loading from 'components/atoms/Loading';
import Breadcrumb from 'components/molecules/Breadcrumb';
import HeroBanner from 'components/templates/HeroBanner';
import HelmetContainer from 'container/helmet';
import RedirectNavigate from 'navigations/redirectNavigate';
import { getNewsCategoryDetailService } from 'services/home';
import { useAppSelector } from 'store/hooks';
import { getBreadcrumbs } from 'utils/breadcrumbs';
import { DEFAULT_QUERY_OPTION } from 'utils/constants';
import { convertBanner } from 'utils/functions';

const NewsCategoryContainer: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const language = useAppSelector((state) => state.system.language);

  const { isLoading, error, data } = useQuery(
    ['getNewsCategory', slug, language], () => getNewsCategoryDetailService(slug || ''),
    DEFAULT_QUERY_OPTION,
  );

  if (isLoading) return <Loading isShow variant="fullScreen" />;

  if (error) return <RedirectNavigate />;

  return (
    <>
      <HelmetContainer ogData={data?.openGraph} seoData={data?.seoData} />
      <HeroBanner list={convertBanner(data?.banner.items || [])} />
      <div className="p-newsCategory_breadcrumb u-mt-md-24 u-mb-md-27 u-mt-14 u-mb-16">
        <Breadcrumb
          breadcrumbs={getBreadcrumbs({
            breadcrumbs: data?.breadcrumbs || [],
            language,
            title: data?.name || '',
          })}
        />
      </div>
      <CategoryGeneralContainer />
    </>
  );
};

export default NewsCategoryContainer;
