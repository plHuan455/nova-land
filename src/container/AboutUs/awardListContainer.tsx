import React from 'react';

import tabsData from 'assets/dataDummy/awardList';
import AwardList from 'components/templates/AwardList';

const AwardListContainer: React.FC = () => (
  <div className="p-aboutUs_awardList">
    <AwardList
      title="GIẢI THƯỞNG"
      desc="Những thành tựu của Tập đoàn Novaland được ghi nhận, vinh danh qua nhiều giải thưởng, danh hiệu uy tín trong và ngoài nước; thể hiện nỗ lực không ngừng trong việc quy hoạch đồng bộ BĐS tại các vị trí chiến lược, kiến tạo cộng đồng nhân văn tiên tiến với môi trường sống tiện nghi, hiện đại, góp phần vào sự phát triển bền vững của xã hội."
      tabsData={tabsData}
    />
  </div>
);

export default AwardListContainer;
