import { Story, Meta } from '@storybook/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import EcoCard from '.';

import { brandList } from 'assets/dataDummy/ecoSystems';
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
      <EcoCard fieldImgSrc={img} brandList={brandList} href="/" />
    </div>
  </BrowserRouter>
);
