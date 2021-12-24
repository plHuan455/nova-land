import { Story, Meta } from '@storybook/react';
import React from 'react';

import EcoCard from '.';

import brand1 from 'assets/images/dynasty_house.png';
import brand2 from 'assets/images/jumbo.png';
import img from 'assets/images/nova_edu.png';
import brand4 from 'assets/images/phin_deli.png';
import brand3 from 'assets/images/sgcasa.png';

export default {
  title: 'Components/molecules/EcoCard',
  component: EcoCard,
  argTypes: {
    handleClick: {
      control: 'action',
    },
  },
} as Meta;

const brandList = [
  {
    imgSrc: brand1,
  },
  {
    imgSrc: brand2,
  },
  {
    imgSrc: brand3,
  },
  {
    imgSrc: brand4,
  },
];

export const normal: Story = ({ handleClick }) => (
  <EcoCard fieldImgSrc={img} brandList={brandList} handleClick={handleClick} />
);
