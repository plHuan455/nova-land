import { Story, Meta } from '@storybook/react';
import React from 'react';

import FilterRecruitment from '.';

export default {
  title: 'Components/organisms/FilterRecruitment',
  component: FilterRecruitment,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <div style={{ background: '#999', padding: 100 }}>
    <FilterRecruitment
      heading="Novator"
      desc="Thu hút nhân tài, tạo dựng giá trị, tích lũy thành công"
    />
  </div>
);
