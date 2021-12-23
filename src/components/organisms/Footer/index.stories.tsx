import { Story, Meta } from '@storybook/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Footer from '.';

import footerMenuData from 'assets/dataDummy/footer';

export default {
  title: 'Components/organisms/Footer',
  component: Footer,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <BrowserRouter>
    <Footer
      externalLink={{
        privacy: '/',
        policy: '/',
      }}
      footerLink={footerMenuData}
    />
  </BrowserRouter>
);
