import React from 'react';

import newsDetailDumy from 'assets/dataDummy/newsDetail';
import NewsDetail from 'components/templates/NewsDetail';

const NewsDetailTemplateContainer: React.FC = () => (
  <div className="p-newsdetail_content">
    <NewsDetail
      newsDetail={newsDetailDumy.newsDetailData.newsDetail}
      relatedNews={newsDetailDumy.newsDetailData.relatedNews}
      keyword={newsDetailDumy.keywordList}
      titleLatest="Các tin mới nhất"
      titleHot="Các tin nổi bật"
    />
  </div>
);

export default NewsDetailTemplateContainer;
