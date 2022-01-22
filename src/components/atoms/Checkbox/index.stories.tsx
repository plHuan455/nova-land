/* eslint-disable no-console */
import { Story, Meta } from '@storybook/react';
import React, { ChangeEvent } from 'react';

import Checkbox from '.';

export default {
  title: 'Components/atoms/Checkbox',
  component: Checkbox,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <div className="">
    <Checkbox
      id="1"
      name="1"
      value="1"
      onChange={(event: ChangeEvent<HTMLInputElement>) => console.log(event.target.checked)}
    />
  </div>
);

export const withLabel: Story = () => (
  <div className="">
    <Checkbox
      id="2"
      name="2"
      value="2"
      onChange={(event: ChangeEvent<HTMLInputElement>) => console.log(event.target.id)}
    >
      ABC
    </Checkbox>
  </div>
);
