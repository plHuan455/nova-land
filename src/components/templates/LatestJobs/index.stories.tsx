import { Story, Meta } from '@storybook/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import LatestJobs from '.';

import listJobs from 'assets/dataDummy/latestJobsDummy';

export default {
  title: 'Components/templates/LatestJobs',
  component: LatestJobs,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <BrowserRouter>
    <LatestJobs
      title="Các việc làm mới nhất"
      listJob={listJobs}
    />
  </BrowserRouter>
);
