/* eslint-disable react/require-default-props */
import React, { useMemo } from 'react';
import { useQuery } from 'react-query';

import NewsDetail from 'components/templates/NewsDetail';
import { getRelatedNewsService } from 'services/newsDetail';
import { NewsDetailData, NewsTagType } from 'services/newsDetail/type';
import { DEFAULT_QUERY_OPTION } from 'utils/constants';
import { formatDateDDMMYYYY, getHourFromPastToCurrent, getImageURL } from 'utils/functions';

interface NewsDetailTemplateContainerProps {
  data?: NewsDetailData;
  newsTagData?: NewsTagType[];
  handleTagClick?: (value: string) => void;
}

const NewsDetailTemplateContainer: React.FC<NewsDetailTemplateContainerProps> = ({
  data,
  newsTagData,
  handleTagClick,
}) => {
  const { data: hightLightNews } = useQuery(
    ['GetHightLightNewsData', data],
    () => getRelatedNewsService({
      limit: 5,
      category_slug: data?.category[0].slug,
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
    () => getRelatedNewsService({
      limit: 5,
      category_slug: data?.category[0].slug,
      except_ids: String(data?.id),
    }),
    {
      ...DEFAULT_QUERY_OPTION,
      enabled: !!data,
    },
  );

  const newsDetail = useMemo(() => ({
    id: String(data?.id),
    title: data?.title || '',
    shortDescription: data?.description,
    content: data?.content || '',
    createDate: formatDateDDMMYYYY(data?.publishedAt || ''),
    numberView: data?.viewed ? String(data?.viewed) : '',
    author: data?.authorName || '',
    newsTypes: data?.tags.map((item) => item.name) || [],
  }), [data]);

  const hightLightNewsData = useMemo(() => hightLightNews?.map((item) => ({
    id: String(item.id),
    title: item.title,
    content: item.content,
    status: new Date(item.publishedAt || '') === new Date()
      ? `${getHourFromPastToCurrent(item.publishedAt)} giờ trước`
      : formatDateDDMMYYYY(item.publishedAt),
    imageNews: getImageURL(item.thumbnail),
    href: `/chi-tiet-tin-tuc/${item.slug}`,
  })), [hightLightNews]);

  const relatedNewsData = useMemo(() => relatedNews?.map((item) => ({
    id: String(item.id),
    title: item.title,
    content: item.content,
    status: new Date(item.publishedAt || '') === new Date()
      ? `${getHourFromPastToCurrent(item.publishedAt)} giờ trước`
      : formatDateDDMMYYYY(item.publishedAt),
    imageNews: getImageURL(item.thumbnail),
    href: `/chi-tiet-tin-tuc/${item.slug}`,
  })), [relatedNews]);

  const tagNewsData = useMemo(() => newsTagData?.map((item) => item.name), [newsTagData]);

  return (
    <div className="p-newsdetail_content">
      <NewsDetail
        newsDetail={newsDetail || ''}
        relatedNews={relatedNewsData || []}
        keyword={tagNewsData || []}
        titleLatest="Các tin mới nhất"
        titleHot="Các tin nổi bật"
        hightLightNews={hightLightNewsData || []}
        handleTagClick={handleTagClick}
      />
    </div>
  );
};

export default NewsDetailTemplateContainer;
