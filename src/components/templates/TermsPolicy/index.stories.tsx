import { Story, Meta } from '@storybook/react';
import React from 'react';

import TermsPolicy from '.';

export default {
  title: 'Components/templates/TermsPolicy',
  component: TermsPolicy,
  argTypes: {},
} as Meta;

const title = 'Điều khoản khách hàng';
const description = 'Content';

export const normal: Story = () => (
  <TermsPolicy title={title} description={description} />
);
