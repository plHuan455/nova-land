import { Story, Meta } from '@storybook/react';
import React from 'react';

import StockInformation, { StockInformationType } from '.';

import imgStock from 'assets/images/imgStock.png';
import Image from 'components/atoms/Image';

export default {
  title: 'Components/templates/StockInformation',
  component: StockInformation,
  argTypes: {},
} as Meta;

const StockInformationData: StockInformationType[] = [
  {
    desc: 'Thay đổi',
    movementNumber: -1.800,
    movementPercent: -2.04,
  },
  {
    desc: 'Khối lượng giao dịch',
    movementNumber: 3022.700,
    movementPercent: 0,
  },
  {
    desc: 'Vốn hóa',
    movementNumber: 166.788,
    movementPercent: 0,
  },
  {
    desc: 'Khối lượng giao dịch trung bình 10 phiên',
    movementNumber: 2883.448,
    movementPercent: 0,
  },
];

export const normal: Story = () => (
  <StockInformation
    title="Cổ phiếu Novaland group"
    data={StockInformationData}
    note="Thông tin được trích dẫn từ nguồn Vietstock (http://vietstock.vn). Tập đoàn Novaland sẽ không chịu bất kỳ trách nhiệm nào về tính chính xác, đầy đủ hoặc bất kỳ khía cạnh nào khác đối với thông tin hiển thị trên đây được đăng tải/trích dẫn/tích hợp từ nguồn này."
  >
    <Image ratio="546x308" alt="img" src={imgStock} />
  </StockInformation>
);
