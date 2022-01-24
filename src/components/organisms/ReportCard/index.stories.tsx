import { Story, Meta } from '@storybook/react';
import React from 'react';

import ReportCard from '.';

import imgReport from 'assets/images/ReportList/img-report.png';

export default {
  title: 'Components/organisms/ReportCard',
  component: ReportCard,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <ReportCard
    imageSrc={imgReport}
    title="Báo Cáo Thường Niên 2021"
  />
);
