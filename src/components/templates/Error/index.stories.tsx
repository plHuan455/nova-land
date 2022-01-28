import { Meta, Story } from '@storybook/react';
import React from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';

import Error from '.';

export default {
  title: 'Components/templates/Error',
  component: Error,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <Router>
    <Error
      statusCode={404}
      btnHomeText="Trở về trang chủ"
    />
  </Router>
);
