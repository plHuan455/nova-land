import { Story, Meta } from '@storybook/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from '.';

import headerMenuDummy, { languageListDummy } from 'assets/dataDummy/header';

export default {
  title: 'Components/organisms/Header',
  component: Header,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <BrowserRouter>
    <div style={{
      height: '130vh',
      backgroundColor: '#dbdbdb',
    }}
    >
      <Header
        languageList={languageListDummy}
        headerMenu={headerMenuDummy}
        languageSelected="VN"
      />
    </div>
  </BrowserRouter>
);
