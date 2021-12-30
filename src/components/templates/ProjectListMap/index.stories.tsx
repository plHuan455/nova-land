import { Story, Meta } from '@storybook/react';
import React from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';

import ProjectListMap from '.';

export default {
  title: 'Components/templates/ProjectListMap',
  component: ProjectListMap,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <Router>
    <ProjectListMap />
  </Router>
);
