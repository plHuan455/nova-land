/* eslint-disable no-console */
import { Story, Meta } from '@storybook/react';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Pagination from '.';

export default {
  title: 'Components/molecules/Pagination',
  component: Pagination,
  argTypes: {
    totalPage: {
      control: {
        type: 'number',
      },
      defaultValue: 10,
    },
  },
} as Meta;

export const Normal: Story = ({
  totalPage,
}) => (
  <div>
    <Router>
      <Pagination
        totalPage={totalPage}
        handleChangePage={(page: number) => console.log(page)}
      />
    </Router>
  </div>
);
