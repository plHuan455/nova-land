import { Meta, Story } from '@storybook/react';
import React from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';

import Error from '.';

export default {
  title: 'Components/templates/Error',
  component: Error,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <Router>
    <Error
      title="Chúng tôi xin lỗi vì sự bất tiện này!"
      description="Có lẽ trang bạn đang tìm kiếm không tồn tại."
      btnHomeText="Trở về trang chủ"
    />
  </Router>
);
