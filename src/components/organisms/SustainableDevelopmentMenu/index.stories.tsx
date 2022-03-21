import { Story, Meta } from '@storybook/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import SustainableDevelopmentMenu from '.';

import { headerSustainableDevelopmentMenuDummy } from 'assets/dataDummy/header';

export default {
  title: 'Components/organisms/SustainableDevelopmentMenu',
  component: SustainableDevelopmentMenu,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <BrowserRouter>
    <SustainableDevelopmentMenu
      headerDataMenus={headerSustainableDevelopmentMenuDummy}
    />
  </BrowserRouter>
);
