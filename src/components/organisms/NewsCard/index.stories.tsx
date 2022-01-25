import { Story, Meta } from '@storybook/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Container from '../Container';

import NewsCard from '.';

import img from 'assets/images/card_slide.png';

export default {
  title: 'Components/organisms/NewsCard',
  component: NewsCard,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['smallVertical', 'vertical', 'horizontal'],
      },
      defaultValue: 'smallVertical',
    },
  },
} as Meta;

export const normal: Story = ({ variant }) => (
  <BrowserRouter>
    <div style={{ width: 586 }}>
      <Container>
        <NewsCard
          imgSrc={img}
          time="1 phút trước"
          title="Nova E&M góp phần nâng tầm chuỗi  bất động sản du lịch Novaland 1 phút trước"
          href="/"
          variant={variant}
        />
      </Container>
    </div>
  </BrowserRouter>
);

export const cardSearch: Story = () => (
  <BrowserRouter>
    <Container>
      <NewsCard
        modifiers="smallTitle"
        imgSrc={img}
        title="PGA NovaWorld Phan Thiet - Thiên đường Golf hướng biển mới của Việt Nam"
        desc="Cụm sân golf PGA 36 hố độc quyền là một tiện ích đẳng cấp nằm trong lòng dự án NovaWorld Phan Thiet quy mô 1.000 hecta..."
        href="/"
        time="23/11/2021"
        variant="smallVertical"
      />
    </Container>
  </BrowserRouter>
);
