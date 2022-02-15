import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

import NewsDetailTemplateContainer from './newsDetailContainer';

import Loading from 'components/atoms/Loading';
import Breadcrumb from 'components/molecules/Breadcrumb';
import Section from 'components/templates/Section';
import HelmetContainer from 'container/helmet';
import RedirectNavigate from 'navigations/redirectNavigate';
import { getNewsDetailService, getNewsTagService } from 'services/newsDetail';
import { useAppSelector } from 'store/hooks';
import { getBreadcrumbs } from 'utils/breadcrumbs';
import { DEFAULT_QUERY_OPTION } from 'utils/constants';

const NewsDetailContainer: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const language = useAppSelector((state) => state.system.language);

  const { data, error, isLoading } = useQuery(
    ['GetNewsDetailData', slug],
    () => getNewsDetailService(slug || ''),
    {
      ...DEFAULT_QUERY_OPTION,
    },
  );

  const { data: newsTagData } = useQuery(
    ['GetNewsTagData', slug],
    () => getNewsTagService({
      is_popular: true,
    }),
    {
      ...DEFAULT_QUERY_OPTION,
    },
  );

  if (isLoading) return <Loading isShow variant="fullScreen" />;

  if (error) return <RedirectNavigate />;

  return (
    <>
      <HelmetContainer ogData={data?.openGraph} seoData={data?.seoData} />
      <Section modifiers="noPt">
        <div className="p-eventDetail_breadcrumb u-mt-md-24 u-mb-md-27 u-mt-14 u-mb-16">
          <Breadcrumb
            breadcrumbs={getBreadcrumbs({
              breadcrumbs: data?.breadcrumbs || [],
              language,
              title: data?.title || '',
            })}
          />
        </div>
        <NewsDetailTemplateContainer data={data} newsTagData={newsTagData} />
      </Section>
    </>
  );
};

export default NewsDetailContainer;
