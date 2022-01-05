import { Story, Meta } from '@storybook/react';
import React from 'react';

import VisionMissionValue from '.';

import { dataList } from 'container/AboutUs';

export default {
  title: 'Components/templates/VisionMissionValue',
  component: VisionMissionValue,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <VisionMissionValue dataList={dataList} />
);
