import { Story, Meta } from '@storybook/react';
import React from 'react';

import Form from '.';

export default {
  title: 'Components/organisms/Form',
  component: Form,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <Form />
);
