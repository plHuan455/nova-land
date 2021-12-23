import { Story, Meta } from '@storybook/react';
import React from 'react';

import OutStandingNumbers from '.';

export default {
  title: 'Components/templates/OutStandingNumbers',
  component: OutStandingNumbers,
  argTypes: {},
} as Meta;

const item = {
  number: '50',
  desc: 'Dự án',
};

const list = Array(5).fill(item);

export const normal: Story = () => (
  <OutStandingNumbers
    title="Novaland là thương hiệu uy tín hàng đầu Việt Nam trong lĩnh vực đầu tư &amp; phát triển bất động sản"
    dataList={list}
  />
);
