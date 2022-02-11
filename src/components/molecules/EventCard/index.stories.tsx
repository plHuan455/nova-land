import { Story, Meta } from '@storybook/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import EventCard from '.';

import img from 'assets/images/card_slide.png';

export default {
  title: 'Components/molecules/EventCard',
  component: EventCard,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <BrowserRouter>
    <EventCard
      imgSrc={img}
      title="Novaland tiếp tục tổ chức loạt sự kiện nghệ thuật"
      description="Novaland tiếp tục tổ chức chuỗi đêm trình diễn nghệ thuật quy tụ nghệ sĩ nổi tiếng nhằm tri ân..."
      href="/"
    />
  </BrowserRouter>
);
