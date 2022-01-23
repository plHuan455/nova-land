import { Story, Meta } from '@storybook/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Schedule from '.';

import ScheduleList from 'assets/dataDummy/Schedule';

export default {
  title: 'Components/templates/Schedule',
  component: Schedule,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <BrowserRouter>
    <Schedule
      subTitle="Chuỗi sự kiện đón Giáng sinh và năm mới tại Novaland"
      heading="Lịch Sự Kiện"
      dataCard={ScheduleList}
      modifiers="fourItem"
      btnText="Xem tất cả lịch sự kiện"
    />
  </BrowserRouter>
);
