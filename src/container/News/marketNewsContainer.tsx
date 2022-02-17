import React from 'react';
import { useQuery } from 'react-query';

import Animate from 'components/organisms/Animate';
import NewsList from 'components/templates/NewsList';
import Section from 'components/templates/Section';
import { getNewsService } from 'services/home';
import { useAppSelector } from 'store/hooks';
import { DEFAULT_QUERY_OPTION } from 'utils/constants';
import { getImageURL } from 'utils/functions';

const MarketNewsContainer: React.FC<{ cateSlug: string }> = ({ cateSlug }) => {
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
            title="Tin Thị Trường"
            dataNewsList={convertedMarketNews}
            btnName="Xem tất cả Tin thị trường"
            isFetching={isFetching}
          />
        </div>
      </Section>
    </Animate>
  );
};

export default MarketNewsContainer;
