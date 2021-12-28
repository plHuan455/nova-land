import { Story, Meta } from '@storybook/react';
import React from 'react';

import FieldActivity from '.';

import imgFieldActivity from 'assets/images/img_field_activity.png';

export default {
  title: 'Components/templates/FieldActivity',
  component: FieldActivity,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <FieldActivity
    title="LĨNH VỰC HOẠT ĐỘNG"
    imgSrc={imgFieldActivity}
  />
);
