import { Story, Meta } from '@storybook/react';
import React from 'react';

import EventItem from '.';

export default {
  title: 'Components/organisms/EventItem',
  component: EventItem,
  argTypes: {},
} as Meta;

export const normal: Story = ({ date, description, ...args }) => (
  <EventItem date={date} description={description} {...args} />
);

normal.args = {
  date: new Date(2021, 3, 11),
  description: 'Tưng bừng khai trương Novaland Gallery - Nền tảng trải nghiệm mới tại TP.HCM',
};
