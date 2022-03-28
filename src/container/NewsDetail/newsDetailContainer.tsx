/* eslint-disable react/require-default-props */
import React, { useMemo } from 'react';
import { useQuery } from 'react-query';

import NewsDetail from 'components/templates/NewsDetail';
import { getRelatedNewsService } from 'services/newsDetail';
import { NewsDetailData, NewsTagType } from 'services/newsDetail/type';
import { useAppSelector } from 'store/hooks';
import { DEFAULT_QUERY_OPTION } from 'utils/constants';
import { formatDateDDMMYYYY, getHourFromPastToCurrent, getImageURL } from 'utils/functions';
import { getPrefixURLCode } from 'utils/language';

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
  const language = useAppSelector((state) => state.system.language);

  const { data: hightLightNews } = useQuery(
    ['GetHightLightNewsData', data, language],
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
    ['GetRelatedNewsData', data, language],
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
    href: getPrefixURLCode(language, 'NEWS_DETAIL', item.slug),
  })), [hightLightNews, language]);

  const relatedNewsData = useMemo(() => relatedNews?.map((item) => ({
    id: String(item.id),
    title: item.title,
    content: item.content,
    status: new Date(item.publishedAt || '') === new Date()
      ? `${getHourFromPastToCurrent(item.publishedAt)} giờ trước`
      : formatDateDDMMYYYY(item.publishedAt),
    imageNews: getImageURL(item.thumbnail),
    href: getPrefixURLCode(language, 'NEWS_DETAIL', item.slug),
  })), [language, relatedNews]);

  const tagNewsData = useMemo(() => newsTagData?.map((item) => item.name), [newsTagData]);

  return (
    <div className="p-newsdetail_content">
      <NewsDetail
        newsDetail={newsDetail || ''}
        relatedNews={relatedNewsData || []}
        keyword={tagNewsData || []}
        titleLatest="Tin cùng chuyên mục"
        titleHot="Các tin nổi bật"
        hightLightNews={hightLightNewsData || []}
        handleTagClick={handleTagClick}
      />
    </div>
  );
};

export default NewsDetailTemplateContainer;
