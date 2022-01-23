import { Story, Meta } from '@storybook/react';
import React from 'react';

import FilterGroupRecruitment from '.';

import dataFilterList from 'assets/dataDummy/filterGroupRecruitment';

export default {
  title: 'Components/templates/FilterGroupRecruitment',
  component: FilterGroupRecruitment,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <div style={{ maxWidth: '240px', margin: '30px' }}>
    <FilterGroupRecruitment
      titleMain="Bộ Lọc"
      dataFilterList={dataFilterList}
    />
  </div>
);
