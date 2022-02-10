import React from 'react';
import { useQuery } from 'react-query';

import { tabDataProjectNews } from 'assets/dataDummy/newsList';
import HomeNews from 'components/templates/HomeNews';
import Section from 'components/templates/Section';
import { getNewsService } from 'services/home';
import { DEFAULT_QUERY_OPTION } from 'utils/constants';
import { formatDateDDMMYYYY, getHourFromPastToCurrent, getImageURL } from 'utils/functions';

const TabsNewsContainer: React.FC<{ cateSlug: string }> = ({ cateSlug }) => {
  const { data: res } = useQuery(
    'getProjectNewsData',
    () => getNewsService({ limit: '4', page: '1', category_slug: cateSlug }),
    {
      ...DEFAULT_QUERY_OPTION,
    },
  );
  const convertedProjectNews = res?.data ? res?.data?.map((item) => ({
    imgSrc: getImageURL(item.thumbnail),
    title: item.title,
    desc: item.description,
    date: item.publishedAt,
    totalViews: item.viewed,
    time: new Date(item.publishedAt || '') === new Date()
      ? `${getHourFromPastToCurrent(item.publishedAt)} giờ trước`
      : formatDateDDMMYYYY(item.publishedAt),
    href: item.slug,
  })) : [];
  return (
    <div className="p-news_cateBlock">
      <Section>
        <HomeNews
          title="Tin dự án"
          href="/"
          tabDataHomeNews={tabDataProjectNews}
          newsList={convertedProjectNews}
        />
      </Section>
    </div>
  );
};
export default TabsNewsContainer;
