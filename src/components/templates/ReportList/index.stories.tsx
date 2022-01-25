import { Story, Meta } from '@storybook/react';
import React from 'react';

import ReportList from '.';

import reportList from 'assets/dataDummy/reportList';

export default {
  title: 'Components/templates/ReportList',
  component: ReportList,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <ReportList
    totalPage={5}
    currentPage={1}
    reportList={reportList.ReportListDumy}
  />
);
