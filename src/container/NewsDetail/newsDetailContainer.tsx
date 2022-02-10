import React, { useMemo } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

import NewsDetail from 'components/templates/NewsDetail';
import { getNewsDetailService, getNewsTagService, getRelatedNewsService } from 'services/newsDetail';
import { DEFAULT_QUERY_OPTION } from 'utils/constants';
import { formatDateDDMMYYYY, getHourFromPastToCurrent, getImageURL } from 'utils/functions';

const NewsDetailTemplateContainer: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const { data: newsDetailData } = useQuery(
    ['GetNewsDetailData', slug],
    () => getNewsDetailService(slug || ''),
    {
      ...DEFAULT_QUERY_OPTION,
    },
  );

  const { data: hightLightNews } = useQuery(
    ['GetHightLightNewsData', newsDetailData],
    () => getRelatedNewsService({
      limit: 5,
      category_slug: newsDetailData?.category[0].slug,
      is_popular: 'true',
      except_ids: String(newsDetailData?.id),
    }),
    {
      ...DEFAULT_QUERY_OPTION,
      enabled: !!newsDetailData,
    },
  );

  const { data: relatedNews } = useQuery(
    ['GetRelatedNewsData', newsDetailData],
    () => getRelatedNewsService({
      limit: 3,
      category_slug: newsDetailData?.category[0].slug,
      except_ids: String(newsDetailData?.id),
    }),
    {
      ...DEFAULT_QUERY_OPTION,
      enabled: !!newsDetailData,
    },
  );

  const { data: newsTagData } = useQuery(
    ['GetNewsTagData', slug],
    () => getNewsTagService({
      is_popular: true,
    }),
    {
      ...DEFAULT_QUERY_OPTION,
    },
  );

  const newsDetail = useMemo(() => ({
    id: String(newsDetailData?.id),
    title: newsDetailData?.title || '',
    shortDescription: newsDetailData?.description,
    content: newsDetailData?.content || '',
    createDate: formatDateDDMMYYYY(newsDetailData?.publishedAt || ''),
    numberView: String(newsDetailData?.viewed),
    author: newsDetailData?.authorName || '',
    newsTypes: newsDetailData?.tags.map((item) => item.name) || [],
  }), [newsDetailData]);

  const hightLightNewsData = useMemo(() => hightLightNews?.map((item) => ({
    id: String(item.id),
    title: item.title,
    content: item.content,
    status: new Date(item.publishedAt || '') === new Date()
      ? `${getHourFromPastToCurrent(item.publishedAt)} giờ trước`
      : formatDateDDMMYYYY(item.publishedAt),
    imageNews: getImageURL(item.thumbnail),
    href: item.slug,
  })), [hightLightNews]);

  const relatedNewsData = useMemo(() => relatedNews?.map((item) => ({
    id: String(item.id),
    title: item.title,
    content: item.content,
    status: new Date(item.publishedAt || '') === new Date()
      ? `${getHourFromPastToCurrent(item.publishedAt)} giờ trước`
      : formatDateDDMMYYYY(item.publishedAt),
    imageNews: getImageURL(item.thumbnail),
    href: item.slug,
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
      />
    </div>
  );
};

export default NewsDetailTemplateContainer;
