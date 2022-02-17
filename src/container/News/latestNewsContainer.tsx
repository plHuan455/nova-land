import React from 'react';
import { useTranslation } from 'react-i18next';

import Animate from 'components/organisms/Animate';
import LatestNews from 'components/templates/LatestNews';
import { NewsDataTypes } from 'services/home/type';
import { useAppSelector } from 'store/hooks';
import { formatDateDDMMYYYY, getHourFromPastToCurrent, getImageURL } from 'utils/functions';
import { getPrefixURLCode } from 'utils/language';

const LatestNewsContainer: React.FC<{latestNewsData: NewsDataTypes[]}> = ({ latestNewsData }) => {
  const { t } = useTranslation();
  const language = useAppSelector((state) => state.system.language);

  const convertedPopularNews = latestNewsData?.map((item, idx) => ({
    imgSrc: getImageURL(item.thumbnail),
    ratio: idx !== 0 ? '582x252' : '582x534' as Ratio,
    alt: item.slug,
    title: item.title.toLocaleLowerCase(),
    time: new Date(item.publishedAt || '') === new Date()
      ? `${getHourFromPastToCurrent(item.publishedAt)} ${t('general.hours_ago')}`
      : formatDateDDMMYYYY(item.publishedAt),
    href: getPrefixURLCode(language, 'NEWS_DETAIL', item.slug),
  }));
  return (
    <Animate type="goUp">
      <div className="p-news_latestNews">
        <LatestNews dataLatestNews={convertedPopularNews} />
      </div>
    </Animate>
  );
};

export default LatestNewsContainer;
