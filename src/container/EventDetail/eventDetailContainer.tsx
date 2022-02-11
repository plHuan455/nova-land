import React, { useMemo } from 'react';
import { useQuery } from 'react-query';

import NewsDetail from 'components/templates/NewsDetail';
import { getRelatedNewsEventService } from 'services/eventDetail';
import { EventDetailData } from 'services/eventDetail/type';
import { NewsTagType } from 'services/newsDetail/type';
import { DEFAULT_QUERY_OPTION } from 'utils/constants';
import { getImageURL } from 'utils/functions';
// import { formatDateDDMMYYYY } from 'utils/functions';
interface NewsDetailTemplateContainerProps {
  data?: EventDetailData;
  newsTagData?: NewsTagType[];
}

const EventDetailTemplateContainer: React.FC<NewsDetailTemplateContainerProps> = ({
  data,
  newsTagData,
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
    // createDate: formatDateDDMMYYYY(data?. || ''),
    numberView: data?.view ? String(data?.view) : '',
    author: data?.authorName || '',
    newsTypes: data?.tags.map((item) => item.name) || [],
  }), [data]);

  const hightLightNewsData = useMemo(() => hightLightNews?.map((item) => ({
    id: String(item.id),
    title: item.title,
    content: item.description,
    // status: new Date(item.publishedAt || '') === new Date()
    //   ? `${getHourFromPastToCurrent(item.publishedAt)} giờ trước`
    //   : formatDateDDMMYYYY(item.publishedAt),
    imageNews: getImageURL(item.thumbnail),
    href: item.slug,
  })), [hightLightNews]);

  const relatedNewsData = useMemo(() => relatedNews?.map((item) => ({
    id: String(item.id),
    title: item.title,
    content: item.description,
    // status: new Date(item.publishedAt || '') === new Date()
    //   ? `${getHourFromPastToCurrent(item.publishedAt)} giờ trước`
    //   : formatDateDDMMYYYY(item.publishedAt),
    imageNews: getImageURL(item.thumbnail),
    href: item.slug,
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
      />
    </div>
  );
};
EventDetailTemplateContainer.defaultProps = {
  data: undefined,
  newsTagData: undefined,
};
export default EventDetailTemplateContainer;
