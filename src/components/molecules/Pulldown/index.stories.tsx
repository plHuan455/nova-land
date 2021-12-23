import { Story, Meta } from '@storybook/react';
import React from 'react';

import Pulldown, { OptionType } from '.';

export default {
  title: 'Components/molecules/Pulldown',
  component: Pulldown,
  argTypes: {
    error: {
      control: {
        type: 'text',
      },
    },
    secondary: {
      control: {
        type: 'boolean',
        options: [false, true],
      },
      defaultValue: false,
    },
  },
} as Meta;

const dummyOption: OptionType[] = [
  { value: 'Quan1', label: 'Quan 1' },
  { value: 'Quan2', label: 'Quan 2' },
  { value: 'Quan3', label: 'Quan 3' },
  { value: 'Quan4', label: 'Quan 4' },
  { value: 'Quan5', label: 'Quan 5' },
  { value: 'Quan6', label: 'Quan 6' },
  { value: 'Quan7', label: 'Quan 7' },
  { value: 'Quan8', label: 'Quan 8' },
  { value: 'Quan9', label: 'Quan 9' },
];

export const normal: Story = ({ error, secondary }) => (
  <div style={{ height: '100vh' }}>
    <Pulldown
      options={dummyOption}
      error={error}
      isSecondary={secondary}
      placeholder="Chọn Quận/Huyện"
      // eslint-disable-next-line no-console
      handleChange={(value: OptionType) => console.log(value)}
    />
  </div>
);
