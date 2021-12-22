import { Story, Meta } from '@storybook/react';
import React from 'react';

import Carousel, { NextArrow, PrevArrow } from '.';

import banner1Img from 'assets/images/banner1.png';

export default {
  title: 'Components/organisms/Carousel',
  component: Carousel,
  argTypes: {
    arrows: {
      control: {
        type: 'select',
        options: [true, false],
      },
    },
  },
} as Meta;
const styleExample = {
  height: 600,
  backgroundColor: '#ccc',
};
const settingBanner = {
  dots: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: <PrevArrow extendClassname="banner" />,
  nextArrow: <NextArrow extendClassname="banner" />,
  infinite: false,
  cssEase: 'ease-in-out',
};
export const banner: Story = () => (
  <div style={{ height: '100vh' }}>
    <Carousel settings={settingBanner}>
      <div style={styleExample}>
        <img src={banner1Img} alt="banner" style={{ width: '100%' }} />
      </div>
      <div style={styleExample}><img src={banner1Img} alt="banner" style={{ width: '100%' }} /></div>
      <div style={styleExample}><img src={banner1Img} alt="banner" style={{ width: '100%' }} /></div>
    </Carousel>
  </div>
);

const settingDefault = {
  dots: true,
  dotsClass: 'slick-dots o-carousel_dots',
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
  infinite: false,
  cssEase: 'ease-in-out',
  customPaging() {
    return (
      <span className="o-carousel_dot" />
    );
  },
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
      },
    },
  ],
};

export const normal: Story = ({ arrows }) => (
  <div style={{
    paddingBottom: '60px',
    backgroundColor: '#fff',
    marginLeft: '60px',
    marginRight: '60px',
  }}
  >
    <Carousel settings={Object.assign(settingDefault, { arrows })}>
      <div style={styleExample}>a</div>
      <div style={styleExample}>b</div>
      <div style={styleExample}>c</div>
      <div style={styleExample}>a</div>
      <div style={styleExample}>b</div>
      <div style={styleExample}>c</div>
      <div style={styleExample}>a</div>
      <div style={styleExample}>b</div>
      <div style={styleExample}>c</div>
    </Carousel>
  </div>
);
