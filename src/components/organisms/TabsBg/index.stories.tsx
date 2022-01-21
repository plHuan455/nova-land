import { Story, Meta } from '@storybook/react';
import React, { useState } from 'react';

import Carousel, { NextArrow, PrevArrow } from '../Carousel';

import { TabsBg, TabBgPanel, TabBg } from '.';

import icActiveTab from 'assets/images/ic_activeTab.png';
import icInActiveTab from 'assets/images/ic_inActiveTab.png';
import Container from 'components/organisms/Container';

export default {
  title: 'Components/organisms/TabBg',
  component: TabsBg,
  argTypes: {},
} as Meta;

const dummyData = [
  {
    label: 'BĐS Trung Tâm',
    content: 'Content 1',
    icActive: icActiveTab,
    icInActive: icInActiveTab,
  },
  {
    label: 'ĐÔ THỊ VỆ TINH',
    content: 'Content 2',
    icActive: icActiveTab,
    icInActive: icInActiveTab,
  },
  {
    label: 'ĐÔ THỊ NGHỈ DƯỠNG',
    content: 'Content 3',
    icActive: icActiveTab,
    icInActive: icInActiveTab,
  },
  {
    label: 'BĐS CÔNG NGHIỆP',
    content: 'Content 4',
    icActive: icActiveTab,
    icInActive: icInActiveTab,
  },
  {
    label: 'BĐS CÔNG NGHIỆP A',
    content: 'Content 5',
    icActive: icActiveTab,
    icInActive: icInActiveTab,
  },
  {
    label: 'BĐS CÔNG NGHIỆP B',
    content: 'Content 6',
    icActive: icActiveTab,
    icInActive: icInActiveTab,
  },
];

export const Normal: Story = () => {
  const [indexActive, setIndexActive] = useState(0);

  const settingDefault = {
    dots: false,
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
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          dots: true,
        },
      },
    ],
  };

  return (
    <Container>
      <TabsBg variableMutate={indexActive}>
        <Carousel settings={Object.assign(settingDefault)}>
          {
            dummyData.map((item, index) => (
              <TabBg
                key={`tab-${index.toString()}`}
                label={item.label}
                active={index === indexActive}
                imgActive={item.icActive}
                imgInActive={item.icInActive}
                handleClick={() => setIndexActive(index)}
              />
            ))
          }
        </Carousel>
      </TabsBg>
      {
          dummyData.map((item, index) => (
            <TabBgPanel key={`tab-panel-${index.toString()}`} active={index === indexActive}>
              {item.content}
            </TabBgPanel>
          ))
        }
    </Container>
  );
};
