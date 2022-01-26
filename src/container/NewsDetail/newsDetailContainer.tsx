import React from 'react';

import newsDetailDummy from 'assets/dataDummy/newsDetail';
import NewsDetail from 'components/templates/NewsDetail';

const NewsDetailTemplateContainer: React.FC = () => (
  <div className="p-newsdetail_content">
    <NewsDetail
      newsDetail={newsDetailDummy.newsDetailData.newsDetail}
      relatedNews={newsDetailDummy.newsDetailData.relatedNews}
      keyword={newsDetailDummy.keywordList}
      titleLatest="Các tin mới nhất"
      titleHot="Các tin nổi bật"
    />
  </div>
);

export default NewsDetailTemplateContainer;
