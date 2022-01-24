import React from 'react';
import ReactDOM from 'react-dom';

import FieldActivityDetailsTab from '.';

import bannerImg from 'assets/images/transportationInfrastructure.png';

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

describe('<FieldActivityDetailsTab />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<FieldActivityDetailsTab dataFieldActivity={dummyData} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
