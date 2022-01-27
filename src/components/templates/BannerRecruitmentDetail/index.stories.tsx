import { Story, Meta } from '@storybook/react';
import React from 'react';

import BannerRecruitmentDetail from '.';

export default {
  title: 'Components/templates/BannerRecruitmentDetail',
  component: BannerRecruitmentDetail,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <BannerRecruitmentDetail
    location="Ho Chi Minh, City"
    plan="Kế Hoạch Dự Án"
    time="Toàn thời gian"
    title="Quản lý Điều hành Dự án"
  />
);
