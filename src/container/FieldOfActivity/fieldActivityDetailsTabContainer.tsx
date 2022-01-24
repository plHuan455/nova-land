import React from 'react';

import bannerImg from 'assets/images/transportationInfrastructure.png';
import FieldActivityDetailsTab from 'components/templates/FieldActivityDetailsTab';
import Section from 'components/templates/Section';

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

const FieldActivityDetailsTabContainer: React.FC = () => (
  <div className="p-fieldOfActivity_heroBanner">
    <Section>
      <FieldActivityDetailsTab dataFieldActivity={dummyData} />
    </Section>
  </div>
);

export default FieldActivityDetailsTabContainer;
