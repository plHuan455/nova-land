import { Story, Meta } from '@storybook/react';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import OutstandingProject, { OutstandingProjectCard } from '.';

import dataOutstandingProjectCard from 'assets/dataDummy/outstandingProject';
import imgOutstandingProject from 'assets/images/OutstandingProject/img_outstanding_project.png';

export default {
  title: 'Components/templates/OutstandingProject',
  component: OutstandingProject,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <Router>
    <OutstandingProject
      title="DỰ ÁN NỔI BẬT"
      outstandingProjectList={dataOutstandingProjectCard}
    />
  </Router>
);

export const card: Story = () => (
  <Router>
    <div style={{ margin: '30px', maxWidth: '221px' }}>
      <OutstandingProjectCard
        imgSrc={imgOutstandingProject}
        title="Aqua City"
        href="/"
      />
    </div>
  </Router>
);
