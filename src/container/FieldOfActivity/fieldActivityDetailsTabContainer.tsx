import React from 'react';

import bannerImg from 'assets/images/field-of-activity-banner.png';
import FieldActivityDetailsTab from 'components/templates/FieldActivityDetailsTab';
import Section from 'components/templates/Section';

const dummyData = [
  {
    label: 'Bất động sản',
    content: {
      imgSrc: bannerImg,
      title: 'THÔNG TIN CHI TIẾT',
      desc: `Trải qua hành trình 29 năm hình thành và phát triển, Novaland hiện sở hữu danh mục hơn 50 dự án Bất động sản; 
      không chỉ dừng lại ở các dự án Bất động sản Đô thị, Tập đoàn còn đầu tư mạnh mẽ loạt dự án Bất động sản Đô thị Du lịch 
      quy mô lớn, với những công trình và sản phẩm dẫn đầu xu hướng, tác động tích cực đến quá trình phát triển đô thị và 
      phát triển du lịch tại các tỉnh thành phía Nam.`,
    },
  },
  {
    label: 'Hạ tầng giao thông',
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
