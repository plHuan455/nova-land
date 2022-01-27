import { Story, Meta } from '@storybook/react';
import React from 'react';

import StockInformation from '.';

import imgStock from 'assets/images/imgStock.png';
import Image from 'components/atoms/Image';

export default {
  title: 'Components/templates/StockInformation',
  component: StockInformation,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <StockInformation
    title="Cổ phiếu Novaland group"
  >
    <Image ratio="546x308" alt="img" src={imgStock} />
  </StockInformation>
);
