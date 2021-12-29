import { Story, Meta } from '@storybook/react';
import React from 'react';

import OutStandingNumbers from '.';

export default {
  title: 'Components/templates/OutStandingNumbers',
  component: OutStandingNumbers,
  argTypes: {},
} as Meta;

const list = [
  {
    number: '50',
    desc: 'Dự án',
  },
  {
    number: '5.400',
    desc: 'Hecta Đất',
  },
  {
    number: '60.000',
    desc: 'Sản Phẩm',
  },
  {
    number: '350.000',
    desc: 'Khách Hàng',
  },
  {
    number: '1.000',
    desc: 'Giải Thưởng',
  },
];

export const normal: Story = () => (
  <OutStandingNumbers
    title="Novaland là thương hiệu uy tín hàng đầu Việt Nam trong lĩnh vực đầu tư &amp; phát triển bất động sản"
    dataList={list}
  />
);
