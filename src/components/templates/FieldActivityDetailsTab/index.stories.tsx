import { Story, Meta } from '@storybook/react';
import React, { useState } from 'react';

import FieldActivityDetailsTab from '.';

import bannerImg from 'assets/images/transportationInfrastructure.png';

export default {
  title: 'Components/templates/FieldActivityDetailsTab',
  component: FieldActivityDetailsTab,
  argTypes: {},
} as Meta;

const dummyData = [
  {
    label: 'Tin Tập Đoàn',
    content: {
      imgSrc: bannerImg,
      title: 'HẠ TẦNG GIAO THÔNG',
      desc: 'Nâng cấp, phát triển hạ tầng giao thông tại nơi có dự án nhằm gia tăng tính kết nối vào hạ tầng giao thông trọng điểm quốc gia.',
    },
  },
  {
    label: 'Tin Thị Trường',
    content: {
      imgSrc: bannerImg,
      title: 'HẠ TẦNG GIAO THÔNG',
      desc: 'Nâng cấp, phát triển hạ tầng giao thông tại nơi có dự án nhằm gia tăng tính kết nối vào hạ tầng giao thông trọng điểm quốc gia.',
    },
  },
  {
    label: 'Tin Dự án',
    content: {
      imgSrc: bannerImg,
      title: 'HẠ TẦNG GIAO THÔNG',
      desc: 'Nâng cấp, phát triển hạ tầng giao thông tại nơi có dự án nhằm gia tăng tính kết nối vào hạ tầng giao thông trọng điểm quốc gia.',
    },
  },
];

export const normal: Story = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [indexActive, setIndexActive] = useState(0);
  return (
    <FieldActivityDetailsTab
      dataFieldActivity={dummyData}
      handleChangeTab={(tag) => {
        setIndexActive(tag);
        console.log(tag);
      }}
      tag={indexActive}
    />
  );
};
