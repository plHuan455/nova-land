import { Story, Meta } from '@storybook/react';
import React from 'react';

import BranchList from '.';

import BranchListData from 'assets/dataDummy/BranchList';

export default {
  title: 'Components/organisms/BranchList',
  component: BranchList,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <div style={{ background: '#F8F8F8', padding: '50px 90px' }}>
    <BranchList
      data={BranchListData}
    />
  </div>
);
