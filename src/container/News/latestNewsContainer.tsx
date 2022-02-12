import React from 'react';

import Animate from 'components/organisms/Animate';
import LatestNews from 'components/templates/LatestNews';
import { NewsDataTypes } from 'services/home/type';
import { formatDateDDMMYYYY, getHourFromPastToCurrent, getImageURL } from 'utils/functions';

const LatestNewsContainer: React.FC<{latestNewsData: NewsDataTypes[]}> = ({ latestNewsData }) => {
  const convertedPopularNews = latestNewsData?.map((item, idx) => ({
    imgSrc: getImageURL(item.thumbnail),
    ratio: idx !== 0 ? '582x252' : '582x534' as Ratio,
    alt: item.slug,
    title: item.title,
    time: new Date(item.publishedAt || '') === new Date()
      ? `${getHourFromPastToCurrent(item.publishedAt)} giờ trước`
      : formatDateDDMMYYYY(item.publishedAt),
    href: `/chi-tiet-tin-tuc/${item.slug}`,
  }));
  return (
    <Animate type="goUp">
      <div className="p-news_latestNews u-pt-lg-93 u-pt-sm-82 u-pt-75">
        <LatestNews dataLatestNews={convertedPopularNews} />
      </div>
    </Animate>
  );
};

export default LatestNewsContainer;
