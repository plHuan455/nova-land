import { Story, Meta } from '@storybook/react';
import React, { useState } from 'react';

import DatePicker from '.';

export default {
  title: 'Components/molecules/DatePicker',
  component: DatePicker,
  argTypes: {
    eventList: {
      control: {
        type: 'select',
      },
      options: [
        [
          new Date(2022, 5, 27),
          new Date(2022, 6, 20),
          new Date(2022, 7, 3),
        ],
        [
          new Date(2022, 6, 30),
          new Date(2022, 6, 3),
          new Date(2022, 5, 31),
        ],
        [
          new Date(2022, 5, 11),
          new Date(2022, 4, 30),
          new Date(2022, 5, 20),
        ],
      ],
    },
  },
} as Meta;

const DatePickerSetup: React.FC<any> = ({ ...args }) => {
  const [startDate, setStartDate] = useState<Date>(new Date());
  return (
    <DatePicker
      selectedDate={startDate}
      onChange={(date:Date) => { setStartDate(date); }}
      {... args}
    />
  );
};

export const normal: Story = ({ ...args }) => (
  <div style={{ margin: 'auto', width: '288px' }}>
    <DatePickerSetup {... args} />
  </div>
);

normal.args = {
  eventList: [
    new Date(2022, 6, 23),
    new Date(2022, 6, 20),
    new Date(2022, 6, 1),
  ],
};
