import React from 'react';
import { useQuery } from 'react-query';

// import latestNewsCardList from 'assets/dataDummy/latestNews';
import Animate from 'components/organisms/Animate';
import LatestNews from 'components/templates/LatestNews';
import { getNewsService } from 'services/home';
import { DEFAULT_QUERY_OPTION } from 'utils/constants';
import { formatDateDDMMYYYY, getHourFromPastToCurrent, getImageURL } from 'utils/functions';

const LatestNewsContainer: React.FC = () => {
  const { data: res } = useQuery(
    'getLatestNewsData',
    () => getNewsService({ is_popular: true, limit: '3' }),
    {
      ...DEFAULT_QUERY_OPTION,
    },
  );
  const convertedPopularNews = res?.data ? res?.data?.map((item, idx) => ({
    imgSrc: getImageURL(item.thumbnail),
    ratio: idx !== 0 ? '582x252' : '582x534' as Ratio,
    alt: item.slug,
    title: item.title,
    time: new Date(item.publishedAt || '') === new Date()
      ? `${getHourFromPastToCurrent(item.publishedAt)} giờ trước`
      : formatDateDDMMYYYY(item.publishedAt),
    href: item.slug,
  })) : [];
  return (
    <Animate type="goUp">
      <div className="p-news_latestNews u-pt-lg-93 u-pt-sm-82 u-pt-75">
        <LatestNews dataLatestNews={convertedPopularNews} />
      </div>
    </Animate>
  );
};

export default LatestNewsContainer;
