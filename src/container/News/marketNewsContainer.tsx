import React from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery } from 'react-query';

import Animate from 'components/organisms/Animate';
import NewsList from 'components/templates/NewsList';
import Section from 'components/templates/Section';
import { getNewsService } from 'services/home';
import { useAppSelector } from 'store/hooks';
import { DEFAULT_QUERY_OPTION } from 'utils/constants';
import { getImageURL } from 'utils/functions';

const MarketNewsContainer: React.FC<{ cateSlug: string }> = ({ cateSlug }) => {
  const { t } = useTranslation();
  const language = useAppSelector((state) => state.system.language);
  const { data: res, isFetching } = useQuery(
    ['getMarketNewsList', language],
    () => getNewsService({ limit: 4, page: 1, category_slug: cateSlug }),
    {
      ...DEFAULT_QUERY_OPTION,
    },
  );

  const convertedMarketNews = res?.data ? res?.data?.map((item) => ({
    imgSrc: getImageURL(item.thumbnail),
    title: item.title,
    desc: item.description,
    date: item.publishedAt,
    totalViews: item.viewed,
    href: item.slug,
  })) : [];

  return (
    <Animate type="goUp">
      <Section>
        <div className="p-news_marketNewsContainer">
          <NewsList
            title={t('news.market_news')}
            dataNewsList={convertedMarketNews}
            btnName={t('news.see_all_market_news')}
            isFetching={isFetching}
          />
        </div>
      </Section>
    </Animate>
  );
};

export default MarketNewsContainer;
