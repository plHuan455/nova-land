import { Story, Meta } from '@storybook/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import EcoCard from '.';

import imgEcoHover from 'assets/images/img_eco_hover.png';
import img from 'assets/images/nova_edu.png';

export default {
  title: 'Components/molecules/EcoCard',
  component: EcoCard,
  argTypes: {
  },
} as Meta;

export const normal: Story = () => (
  <BrowserRouter>
    <div style={{ maxWidth: '259px' }}>
      <EcoCard fieldImgSrc={img} brandImage={imgEcoHover} href="/" />
    </div>
  </BrowserRouter>
);
