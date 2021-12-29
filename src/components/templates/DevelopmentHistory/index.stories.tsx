import { Story, Meta } from '@storybook/react';
import React from 'react';

import DevelopmentHistory from '.';

import listDevelopmentHistory from 'assets/dataDummy/developmentHistory';

export default {
  title: 'Components/templates/DevelopmentHistory',
  component: DevelopmentHistory,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <DevelopmentHistory
    list={listDevelopmentHistory}
    title="LỊCH SỬ PHÁT TRIỂN"
    description="Trên hành trình trở thành nhà Đầu tư - Phát triển bất động sản uy tín hàng đầu Việt Nam, bằng niềm đam mê,
  sự tập trung và kiên định thực hiện sứ mệnh của mình, Novaland đã và đang đa dạng hóa sản phẩm ở trung tâm TPHCM,
  đô thị vệ tinh và đô thị du lịch nghỉ dưỡng ở các tỉnh thành trọng điểm, kiến tạo nên những cộng đồng tinh hoa,
  thu hút khách du lịch trong và ngoài nước."
  />
);
