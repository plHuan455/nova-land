import React, { useMemo } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

import newsDetailDummy from 'assets/dataDummy/newsDetail';
import NewsDetail from 'components/templates/NewsDetail';
import { getNewsDetailService, getRelatedNewsService } from 'services/newsDetail';
import { DEFAULT_QUERY_OPTION } from 'utils/constants';
import { formatDateDDMMYYYY, getImageURL } from 'utils/functions';

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

  const newsDetail = useMemo(() => ({
    id: String(newsDetailData?.id),
    title: newsDetailData?.title || '',
    shortDescription: newsDetailData?.description,
    content: newsDetailData?.content || '',
    createDate: formatDateDDMMYYYY(newsDetailData?.publishedAt || ''),
    numberView: '111',
    author: 'Theo Robbreport',
    titleBtn: 'Tìm hiểu thêm Aqua City',
    newsTypes: newsDetailData?.tags.map((item) => item.name) || [],
  }), [newsDetailData]);

  const hightLightNewsData = useMemo(() => hightLightNews?.map((item) => ({
    id: String(item.id),
    title: item.title,
    content: item.content,
    status: 'vừa xong',
    imageNews: getImageURL(item.thumbnail),
    href: item.slug,
  })), [hightLightNews]);

  const relatedNewsData = useMemo(() => relatedNews?.map((item) => ({
    id: String(item.id),
    title: item.title,
    content: item.content,
    status: 'vừa xong',
    imageNews: getImageURL(item.thumbnail),
    href: item.slug,
  })), [relatedNews]);

  return (
    <div className="p-newsdetail_content">
      <NewsDetail
        newsDetail={newsDetail || ''}
        relatedNews={relatedNewsData || []}
        keyword={newsDetailDummy.keywordList}
        titleLatest="Các tin mới nhất"
        titleHot="Các tin nổi bật"
        hightLightNews={hightLightNewsData || []}
      />
    </div>
  );
};

export default NewsDetailTemplateContainer;
