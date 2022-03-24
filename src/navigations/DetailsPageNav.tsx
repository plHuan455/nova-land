import React from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery } from 'react-query';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import RedirectNavigate from './redirectNavigate';

import Loading from 'components/atoms/Loading';
import Breadcrumb from 'components/molecules/Breadcrumb';
import Section from 'components/templates/Section';
import EventDetailTemplateContainer from 'container/EventDetail/eventDetailContainer';
import MainLayoutContainer from 'container/MainLayout';
import NewsDetailTemplateContainer from 'container/NewsDetail/newsDetailContainer';
import HelmetContainer from 'container/helmet';
import { getNewsEventService } from 'services/eventDetail';
import { getNewsDetailService, getNewsTagService } from 'services/newsDetail';
import { useAppSelector } from 'store/hooks';
import { getBreadcrumbs } from 'utils/breadcrumbs';
import { DEFAULT_QUERY_OPTION } from 'utils/constants';
import { getSlugByTemplateCode } from 'utils/functions';
import { getLangURLFirstDash, getStaticSlug } from 'utils/language';

const DetailsPageNav: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const language = useAppSelector((state) => state.system.language);

  let eventDetail;
  let newsDetail;
  if (i18n.language === 'en') {
    eventDetail = location.pathname.split('/')[2] === getStaticSlug('EVENT_DETAIL', i18n.language);
    newsDetail = location.pathname.split('/')[2] === getStaticSlug('NEWS_DETAIL', i18n.language);
  } else {
    eventDetail = location.pathname.split('/')[1] === getStaticSlug('EVENT_DETAIL', i18n.language);
    newsDetail = location.pathname.split('/')[1] === getStaticSlug('NEWS_DETAIL', i18n.language);
  }

  const staticPage = useAppSelector((state) => state.menus.staticPage);

  const handleTagClick = (tag: string) => {
    navigate(`${getLangURLFirstDash(i18n.language)}/${getSlugByTemplateCode('SEARCH', staticPage)}?keyword=${tag}`);
  };

  const {
    data: newsEventData,
    isLoading: isLoadingNewsEvent,
    error: errorNewsEvent,
  } = useQuery(
    ['GetNewsEventData', slug],
    () => getNewsEventService(slug || ''),
    {
      ...DEFAULT_QUERY_OPTION,
      enabled: eventDetail,
    },
  );

  const { data, error, isLoading } = useQuery(
    ['GetNewsDetailData', slug],
    () => getNewsDetailService(slug || ''),
    {
      ...DEFAULT_QUERY_OPTION,
      enabled: newsDetail,
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

  if (isLoading || isLoadingNewsEvent) { return <Loading isShow variant="fullScreen" />; }

  if (error || errorNewsEvent) return <RedirectNavigate />;

  return (
    <MainLayoutContainer>
      <div className="p-newsdetail">
        <HelmetContainer
          ogData={eventDetail ? newsEventData?.openGraph : data?.openGraph}
          seoData={eventDetail ? newsEventData?.seoData : data?.seoData}
        />
        <Section modifiers="noPt">
          <div className="p-eventDetail_breadcrumb u-mt-md-24 u-mb-md-27 u-mt-14 u-mb-16">
            <Breadcrumb
              breadcrumbs={getBreadcrumbs({
                breadcrumbs:
                data?.breadcrumbs || newsEventData?.breadcrumbs || [],
                language,
                title: data?.title || newsEventData?.title || '',
              })}
            />
          </div>
          {eventDetail && (
          <EventDetailTemplateContainer
            data={newsEventData}
            newsTagData={newsTagData}
            handleTagClick={handleTagClick}
          />
          )}
          {newsDetail && (
          <NewsDetailTemplateContainer
            data={data}
            newsTagData={newsTagData}
            handleTagClick={handleTagClick}
          />
          )}
        </Section>
      </div>
    </MainLayoutContainer>
  );
};

export default DetailsPageNav;
