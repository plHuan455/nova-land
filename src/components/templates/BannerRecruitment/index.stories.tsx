import { Story, Meta } from '@storybook/react';
import React from 'react';

import BannerRecruitment from '.';

import RecruitmentBanner from 'assets/images/recruitment-banner.png';
import Heading from 'components/atoms/Heading';

export default {
  title: 'Components/templates/BannerRecruitment',
  component: BannerRecruitment,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <BannerRecruitment
    imageSrc={RecruitmentBanner}
  >
    <Heading modifiers={['38x52', 'white', 'center']}>Cơ hội nghề nghiệp</Heading>
  </BannerRecruitment>
);
