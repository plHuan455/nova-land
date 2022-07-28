import { Story, Meta } from '@storybook/react';
import React from 'react';

import CalendarEvent from '.';

export default {
  title: 'Components/organisms/CalendarEvent',
  component: CalendarEvent,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <div style={{
    width: '800px', height: '700px', margin: 'auto', padding: 50,
  }}
  >
    <CalendarEvent />
  </div>
);
