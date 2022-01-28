/* eslint-disable no-console */
import { Story, Meta } from '@storybook/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import EventList from '.';

import eventPage from 'assets/dataDummy/eventPage';

export default {
  title: 'Components/templates/EventList',
  component: EventList,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <BrowserRouter>
    <EventList
      eventList={eventPage.eventData}
      totalPage={10}
      handleGetPage={(p) => console.log(p)}
    />
  </BrowserRouter>
);
