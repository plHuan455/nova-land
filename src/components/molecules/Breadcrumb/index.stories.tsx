import { Story, Meta } from '@storybook/react';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Breadcrumb from '.';

import breadcrumb from 'assets/dataDummy/breadcrumb';

export default {
  title: 'Components/molecules/Breadcrumb',
  component: Breadcrumb,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <Router>
    <Breadcrumb
      breadcrumbs={breadcrumb}
      pathNameHome="/"
    />
  </Router>
);
