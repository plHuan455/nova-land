import { Story, Meta } from '@storybook/react';
import React from 'react';

import VisionMissionValue from '.';

import dataList from 'assets/dataDummy/visionMissionValue';

export default {
  title: 'Components/templates/VisionMissionValue',
  component: VisionMissionValue,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <VisionMissionValue dataList={dataList} />
);
