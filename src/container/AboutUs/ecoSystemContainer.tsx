import React from 'react';

import { ecoCardList } from 'assets/dataDummy/ecoSystems';
import Animate from 'components/organisms/Animate';
import EcoSystems from 'components/templates/EcoSystems';

const EcoSystemContainer: React.FC = () => (
  <Animate type="goUp">
    <div className="p-aboutUs_ecoSystem">
      <EcoSystems
        title="HỆ SINH THÁI NOVA"
        desc="Hệ sinh thái Nova Group, mang những tinh hoa Văn Hóa, Ẩm Thực, Giáo Dục, Vui Chơi - Giải Trí, Du Lịch Nghỉ Dưỡng,
    Chăm Sóc Sức Khỏe, Y Tế hàng đầu thế giới và Việt Nam về hội tụ tại quần thể các dự án của Novaland nhằm phục vụ
    sự tiện nghi và thịnh vượng cho cộng đồng cư dân, tăng giá trị cho các sản phẩm bất động sản và hiệu quả cho các nhà đầu tư."
        dataList={ecoCardList}
      />
    </div>
  </Animate>
);

export default EcoSystemContainer;
