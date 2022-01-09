import React from 'react';

import listDevelopmentHistory from 'assets/dataDummy/developmentHistory';
import DevelopmentHistory from 'components/templates/DevelopmentHistory';

const DevelopmentHistoryContainer: React.FC = () => (
  <div className="p-aboutUs_developmentHistory">
    <DevelopmentHistory
      list={listDevelopmentHistory}
      title="LỊCH SỬ PHÁT TRIỂN"
      description="Trên hành trình trở thành nhà Đầu tư - Phát triển bất động sản
      Novaland đã và đang đa dạng  hóa sản phẩm ở trung tâm TPHCM,
      đô thị vệ tinh và đô thị du lịch nghỉ dưỡng ở các tỉnh thành trọng điểm,
      kiến tạo nên những cộng đồng tinh hoa, thu hút khách du lịch trong và ngoài nước."
    />
  </div>
);

export default DevelopmentHistoryContainer;
