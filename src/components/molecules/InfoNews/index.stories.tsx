import { Story, Meta } from '@storybook/react';
import React from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';

import InfoNews from '.';

import imgRelatedNews from 'assets/images/News/related-news.png';

export default {
  title: 'Components/molecules/InfoNews',
  component: InfoNews,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <Router>
    <InfoNews
      imageSrc={imgRelatedNews}
      title="Aqua City - không gian xanh lý tưởng cho sức khỏe và gắn kết..."
      status="Vừa xong"
      href="#"
    />
  </Router>
);
