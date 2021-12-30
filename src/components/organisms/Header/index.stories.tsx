import { Story, Meta } from '@storybook/react';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from '.';

import headerMenuDummy from 'assets/dataDummy/header';

export default {
  title: 'Components/organisms/Header',
  component: Header,
  argTypes: {},
} as Meta;

export const Normal: Story = () => (
  <Router>
    <div style={{
      height: '130vh',
      backgroundColor: '#dbdbdb',
    }}
    >
      <Header
        headerMenu={headerMenuDummy}
      />
    </div>
  </Router>
);
