import { Story, Meta } from '@storybook/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import EcoSystems from '.';

import ecoCardList from 'assets/dataDummy/ecoSystems';

export default {
  title: 'Components/templates/EcoSystems',
  component: EcoSystems,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <BrowserRouter>
    <EcoSystems
      title="HỆ SINH THÁI NOVA"
      desc="Hệ sinh thái Nova Group, mang những tinh hoa Văn Hóa, Ẩm Thực, Giáo Dục, Vui Chơi - Giải Trí, Du Lịch Nghỉ Dưỡng,
    Chăm Sóc Sức Khỏe, Y Tế hàng đầu thế giới và Việt Nam về hội tụ tại quần thể các dự án của Novaland nhằm phục vụ
    sự tiện nghi và thịnh vượng cho cộng đồng cư dân, tăng giá trị cho các sản phẩm bất động sản và hiệu quả cho các nhà đầu tư."
      dataList={ecoCardList}
    />
  </BrowserRouter>
);
