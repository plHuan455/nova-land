import { Story, Meta } from '@storybook/react';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import RecruitmentPositionCard from '.';

export default {
  title: 'Components/organisms/RecruitmentPositionCard',
  component: RecruitmentPositionCard,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <div style={{ maxWidth: '864px', margin: '30px' }}>
    <Router>
      <RecruitmentPositionCard
        breadcrumbsRecruitment={['Ho Chi Minh, City', 'Kế Hoạch Dự Án', 'Toàn thời gian']}
        title="Quản lý Điều hành Dự án"
        desc="Lập và theo dõi kế hoạch tổng thể tiến độ thực hiện các dự án quản lý gồm pháp lý, thiết kế, thi công, kinh doanh và..."
        expirationDate="26/02/2022"
        href="/"
      />
    </Router>
  </div>
);
