import React from 'react';

import { ecoCardList } from 'assets/dataDummy/ecoSystems';
import EcoSystems from 'components/templates/EcoSystems';

const EcoSystemContainer: React.FC = () => (
  <div className="p-home_ecoSystem pt-100">
    <EcoSystems
      title="HỆ SINH THÁI NOVA"
      desc="Hệ sinh thái Nova Group, mang những tinh hoa Văn Hóa, Ẩm Thực, Giáo Dục, Vui Chơi - Giải Trí, Du Lịch Nghỉ Dưỡng,
    Chăm Sóc Sức Khỏe, Y Tế hàng đầu thế giới và Việt Nam về hội tụ tại quần thể các dự án của Novaland nhằm phục vụ
    sự tiện nghi và thịnh vượng cho cộng đồng cư dân, tăng giá trị cho các sản phẩm bất động sản và hiệu quả cho các nhà đầu tư."
      dataList={ecoCardList}
    />
  </div>
);

export default EcoSystemContainer;
