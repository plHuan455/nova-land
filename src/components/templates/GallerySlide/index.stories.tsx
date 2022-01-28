import { Story, Meta } from '@storybook/react';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import GallerySlide from '.';

import imgGallerySlide from 'assets/images/img_gallery_slide.png';

export default {
  title: 'Components/templates/GallerySlide',
  component: GallerySlide,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <Router>
    <GallerySlide
      title="Novaland Gallery"
      desc="Trung tâm giới thiệu các dự án trọng điểm của Novaland cùng
      hệ sinh thái dịch vụ và tiện ích NovaGroup"
      target="_blank"
      href="/"
      imgList={[imgGallerySlide, imgGallerySlide, imgGallerySlide, imgGallerySlide]}
    />
  </Router>
);
