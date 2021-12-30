import { Story, Meta } from '@storybook/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import Header from '.';

import headerMenuDummy from 'assets/dataDummy/header';

export default {
  title: 'Components/organisms/Header',
  component: Header,
  argTypes: {},
  decorators: [(story) => <MemoryRouter>{story()}</MemoryRouter>],
} as Meta;

export const Normal: Story = () => (
  <div style={{
    height: '130vh',
    backgroundColor: '#dbdbdb',
  }}
  >
    <Header
      headerMenu={headerMenuDummy}
    />
  </div>
);
