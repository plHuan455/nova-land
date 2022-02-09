import React, { useMemo } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

import newsDetailDummy from 'assets/dataDummy/newsDetail';
import NewsDetail from 'components/templates/NewsDetail';
import { getNewsDetailService } from 'services/newsDetail';
import { DEFAULT_QUERY_OPTION } from 'utils/constants';

const NewsDetailTemplateContainer: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const { data: newsDetailData } = useQuery(
    ['GetNewsDetailData', slug],
    () => getNewsDetailService(slug || ''),
    {
      ...DEFAULT_QUERY_OPTION,
    },
  );

  const newsDetail = useMemo(() => ({
    id: String(newsDetailData?.id),
    title: newsDetailData?.title || '',
    shortDescription: newsDetailData?.description,
    content: newsDetailData?.content || '',
    createDate: newsDetailData?.publishedAt || '',
    numberView: '111',
    author: 'Theo Robbreport',
    titleBtn: 'Tìm hiểu thêm Aqua City',
    newsTypes: newsDetailData?.tags.map((item) => item.name) || [],
  }), [newsDetailData]);

  return (
    <div className="p-newsdetail_content">
      <NewsDetail
        newsDetail={newsDetail || ''}
        relatedNews={newsDetailDummy.newsDetailData.relatedNews}
        keyword={newsDetailDummy.keywordList}
        titleLatest="Các tin mới nhất"
        titleHot="Các tin nổi bật"
      />
    </div>
  );
};

export default NewsDetailTemplateContainer;
