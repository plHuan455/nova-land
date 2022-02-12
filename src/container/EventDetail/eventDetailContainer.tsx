/* eslint-disable react/require-default-props */
import React, { useMemo } from 'react';
import { useQuery } from 'react-query';

import NewsDetail from 'components/templates/NewsDetail';
import { getRelatedNewsEventService } from 'services/eventDetail';
import { EventDetailData } from 'services/eventDetail/type';
import { NewsTagType } from 'services/newsDetail/type';
import { DEFAULT_QUERY_OPTION } from 'utils/constants';
import { formatDateDDMMYYYY, getImageURL, getTime } from 'utils/functions';
// import { formatDateDDMMYYYY } from 'utils/functions';
interface NewsDetailTemplateContainerProps {
  data?: EventDetailData;
  newsTagData?: NewsTagType[];
  handleTagClick?: (value: string) => void;
}

const EventDetailTemplateContainer: React.FC<NewsDetailTemplateContainerProps> = ({
  data,
  newsTagData,
  handleTagClick,
}) => {
  const { data: hightLightNews } = useQuery(
    ['GetHightLightNewsData', data],
    () => getRelatedNewsEventService({
      limit: 5,
      is_popular: 'true',
      except_ids: String(data?.id),
    }),
    {
      ...DEFAULT_QUERY_OPTION,
      enabled: !!data,
    },
  );

  const { data: relatedNews } = useQuery(
    ['GetRelatedNewsData', data],
    () => getRelatedNewsEventService({
      limit: 5,
      except_ids: String(data?.id),
    }),
    {
      ...DEFAULT_QUERY_OPTION,
      enabled: !!data,
    },
  );

  const newsEvent = useMemo(() => ({
    id: String(data?.id),
    title: data?.title || '',
    imageNews: getImageURL(data?.image),
    shortDescription: data?.shortDescription,
    content: data?.description || '',
    createDate: formatDateDDMMYYYY(data?.eventFrom || ''),
    numberView: data?.view ? String(data?.view) : '',
    author: data?.authorName || '',
    newsTypes: data?.tags.map((item) => item.name) || [],
  }), [data]);

  const hightLightNewsData = useMemo(() => hightLightNews?.map((item) => ({
    id: String(item.id),
    title: item.title,
    content: item.description,
    imageNews: getImageURL(item.thumbnail),
    href: `/chi-tiet-su-kien/${item.slug}`,
  })), [hightLightNews]);

  const relatedNewsData = useMemo(() => relatedNews?.map((item) => ({
    id: String(item.id),
    title: item.title,
    content: item.description,
    imageNews: getImageURL(item.thumbnail),
    href: `/chi-tiet-su-kien/${item.slug}`,
  })), [relatedNews]);

  const tagNewsData = useMemo(() => newsTagData?.map((item) => item.name), [newsTagData]);

  return (
    <div className="p-eventDetail_content">
      <NewsDetail
        newsDetail={newsEvent || ''}
        relatedNews={relatedNewsData || []}
        hightLightNews={hightLightNewsData || []}
        keyword={tagNewsData || []}
        titleLatest="Các sự kiện mới nhất"
        titleHot="Các sự kiện nổi bật"
        eventCardDetails={{
          address: data?.address,
          button: data?.link,
          name: data?.addressName,
          thumbnail: getImageURL(data?.thumbnail),
          time: `${getTime(data?.eventFrom)} - ${getTime(data?.eventTo)}`,
          timeSchedule: `${formatDateDDMMYYYY(data?.eventFrom, true)} - ${formatDateDDMMYYYY(data?.eventTo, true)}`,
        }}
        handleTagClick={handleTagClick}
      />
    </div>
  );
};
EventDetailTemplateContainer.defaultProps = {
  data: undefined,
  newsTagData: undefined,
};
export default EventDetailTemplateContainer;
