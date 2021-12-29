import { Story, Meta } from '@storybook/react';
import React from 'react';

import TransportationInfrastructure from '.';

import bannerImg from 'assets/images/banner2.png';

export default {
  title: 'Components/templates/TransportationInfrastructure',
  component: TransportationInfrastructure,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <TransportationInfrastructure
    imgSrc={bannerImg}
    title="HẠ TẦNG GIAO THÔNG"
    desc="Nâng cấp, phát triển hạ tầng giao thông tại nơi có dự án nhằm gia tăng tính kết nối vào hạ tầng giao thông trọng điểm quốc gia."
  />
);
