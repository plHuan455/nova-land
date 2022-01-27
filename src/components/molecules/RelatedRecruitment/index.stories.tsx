import { Story, Meta } from '@storybook/react';
import React from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';

import RelatedRecruitment from '.';

import imgRealed from 'assets/images/Recruitment/img_related-recuitment.png';

export default {
  title: 'Components/molecules/RelatedRecruitment',
  component: RelatedRecruitment,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <Router>
    <RelatedRecruitment
      imageSrc={imgRealed}
      title="Giám sát Dự án"
      plan="Kế hoạch dự án"
      time="Toàn thời gian"
      href="#"
    />
  </Router>
);
