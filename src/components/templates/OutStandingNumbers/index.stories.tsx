import { Story, Meta } from '@storybook/react';
import React from 'react';

import OutStandingNumbers from '.';

import dataList from 'assets/dataDummy/outStandingNumbers';

export default {
  title: 'Components/templates/OutStandingNumbers',
  component: OutStandingNumbers,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <OutStandingNumbers
    title="Novaland là thương hiệu uy tín hàng đầu Việt Nam trong lĩnh vực đầu tư &amp; phát triển bất động sản"
    dataList={dataList}
  />
);
