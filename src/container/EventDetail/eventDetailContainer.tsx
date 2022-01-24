import React from 'react';

import newsDetailDumy from 'assets/dataDummy/eventDetail';
import NewsDetail from 'components/templates/NewsDetail';

const EventDetailTemplateContainer: React.FC = () => (
  <div className="p-eventDetail_content">
    <NewsDetail
      newsDetail={newsDetailDumy.newsDetailData.newsDetail}
      relatedNews={newsDetailDumy.newsDetailData.relatedNews}
      keyword={newsDetailDumy.keywordList}
      titleLatest="Các sự kiện mới nhất"
      titleHot="Các sự kiện nổi bật"
    />
  </div>
);

export default EventDetailTemplateContainer;
