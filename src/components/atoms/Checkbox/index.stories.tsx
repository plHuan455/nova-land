import { Story, Meta } from '@storybook/react';
import React, { ChangeEvent } from 'react';

import Checkbox from '.';

export default {
  title: 'Components/atoms/Checkbox',
  component: Checkbox,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <Checkbox
    id="1"
    name="1"
    value="1"
    onChange={(event: ChangeEvent<HTMLInputElement>) => console.log(event.target.checked)}
  />
);

export const withLabel: Story = () => (
  <Checkbox
    id="2"
    name="2"
    value="2"
    onChange={(event: ChangeEvent<HTMLInputElement>) => console.log(event.target.checked)}
  >
    ABC
  </Checkbox>
);
