import { Story, Meta } from '@storybook/react';
import React from 'react';

import Heading from '.';

export default {
  title: 'Components/atoms/Heading',
  component: Heading,
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['h1', 'h2', 'h3', 'h4', 'h5'],
      },
      defaultValue: 'h2',
    },
    size: {
      control: {
        type: 'select',
        options: ['default', '20x30', '32x48', '38x52', '60x72'],
      },
    },
    fontWeight: {
      control: {
        type: 'select',
        options: [
          '100',
          '200',
          '300',
          '400',
          '500',
          '600',
          '700',
          '800',
          '900',
        ],
      },
      defaultValue: '400',
    },
    color: {
      control: {
        type: 'select',
        options: [
          'white',
          'raisinBlack',
          'davysGrey',
          'grayX11',
          'whiteSmoke',
          'snow',
          'amazon',
          'xanadu',
          'goldenBrown',
          'paleGoldenrod',
          'juneBud',
          'greenryb',
          'aeroBlue',
          'coolBlack',
          'metallicSunburst',
        ],
      },
      defaultValue: 'raisinBlack',
    },
    text: {
      control: {
        type: 'text',
      },
      defaultValue: 'Testing Heading',
    },
    style: {
      control: {
        type: 'select',
        options: ['uppercase', 'capitalize', 'underline', 'italic', 'center'],
      },
      defaultValue: 'uppercase',
    },
  },
} as Meta;

export const normal: Story = ({
  size,
  type,
  color,
  fontWeight,
  style,
  text,
}) => (
  <Heading type={type} modifiers={[color, fontWeight, style, size]}>
    {text}
  </Heading>
);
