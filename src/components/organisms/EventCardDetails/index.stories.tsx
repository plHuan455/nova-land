import { Story, Meta } from '@storybook/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import EventCardDetails from '.';

import bgeventcarddetails from 'assets/images/bg_eventcarddetails.png';

export default {
  title: 'Components/organisms/EventCardDetails',
  component: EventCardDetails,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <BrowserRouter>
    <EventCardDetails
      address="2Bis Nguyễn Thị Minh Khai, P. Đa Kao, Quận 1"
      button={{
        target: '_blank',
        text: 'Đăng ký tham gia',
        url: 'https://google.com.vn',
      }}
      thumbnail={bgeventcarddetails}
      time="09:00 - 21:00"
      timeSchedule="08.01.2022 - 06.02.2022"
      name="Novaland Gallery"
    />
  </BrowserRouter>
);
