import { Story, Meta } from '@storybook/react';
import React from 'react';

import FilterRecuitment from '.';

export default {
  title: 'Components/organisms/FilterRecuitment',
  component: FilterRecuitment,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <div style={{ background: '#999', padding: 100 }}>
    <FilterRecuitment
      heading="Novator"
      desc="Thu hút nhân tài, tạo dựng giá trị, tích lũy thành công"
    />
  </div>
);
