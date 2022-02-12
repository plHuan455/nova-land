import { Story, Meta } from '@storybook/react';
import React from 'react';

import ProductLines from '.';

import icActiveTab from 'assets/images/ic_activeTab.png';
import icInActiveTab from 'assets/images/ic_inActiveTab.png';
import imgProduct from 'assets/images/img-product.png';
import imgInfo from 'assets/images/img_info-product-1.png';
import Container from 'components/organisms/Container';

export default {
  title: 'Components/templates/ProductLines',
  component: ProductLines,
  argTypes: {},
} as Meta;

const dummyData = [
  {
    label: 'BĐS Trung Tâm BĐS Trung Tâm BĐS Trung Tâm',
    imgActive: icActiveTab,
    imgInActive: icInActiveTab,
    slug: '',
    content: {
      title: 'Phát triển phân khúc trung và cao cấp tại trung tâm TP.HCM với dòng sản phẩm:',
      imgSrc: imgProduct,
      desc: [
        {
          imgSrc: imgInfo,
          content: 'Nhà ở cao tầng & thương mại',
        },
        {
          imgSrc: imgInfo,
          content: 'Khu đô thị thấp tầng',
        },
      ],
    },
  },
  {
    label: 'ĐÔ THỊ VỆ TINH',
    imgActive: icActiveTab,
    imgInActive: icInActiveTab,
    slug: '',
    content: {
      title: 'Phát triển phân khúc trung và cao cấp tại trung tâm TP.HCM với dòng sản phẩm:',
      imgSrc: imgProduct,
      desc: [
        {
          imgSrc: imgInfo,
          content: 'Nhà ở cao tầng & thương mại',
        },
        {
          imgSrc: imgInfo,
          content: 'Khu đô thị thấp tầng',
        },
      ],
    },
  },
  {
    label: 'ĐÔ THỊ NGHỈ DƯỠNG',
    imgActive: icActiveTab,
    imgInActive: icInActiveTab,
    slug: '',
    content: {
      title: 'Phát triển phân khúc trung và cao cấp tại trung tâm TP.HCM với dòng sản phẩm:',
      imgSrc: imgProduct,
      desc: [
        {
          imgSrc: imgInfo,
          content: 'Nhà ở cao tầng & thương mại',
        },
        {
          imgSrc: imgInfo,
          content: 'Khu đô thị thấp tầng',
        },
      ],
    },
  },
  {
    label: 'BĐS CÔNG NGHIỆP',
    imgActive: icActiveTab,
    imgInActive: icInActiveTab,
    slug: '',
    content: {
      title: 'Phát triển phân khúc trung và cao cấp tại trung tâm TP.HCM với dòng sản phẩm:',
      imgSrc: imgProduct,
      desc: [
        {
          imgSrc: imgInfo,
          content: 'Nhà ở cao tầng & thương mại',
        },
        {
          imgSrc: imgInfo,
          content: 'Khu đô thị thấp tầng',
        },
      ],
    },
  },
  {
    label: 'BĐS CÔNG NGHIỆP A BĐS CÔNG NGHIỆP A BĐS CÔNG NGHIỆP A',
    imgActive: icActiveTab,
    imgInActive: icInActiveTab,
    slug: '',
    content: {
      title: 'Phát triển phân khúc trung và cao cấp tại trung tâm TP.HCM với dòng sản phẩm:',
      imgSrc: imgProduct,
      desc: [
        {
          imgSrc: imgInfo,
          content: 'Nhà ở cao tầng & thương mại',
        },
        {
          imgSrc: imgInfo,
          content: 'Khu đô thị thấp tầng',
        },
      ],
    },
  },
  {
    label: 'BĐS CÔNG NGHIỆP B BĐS CÔNG NGHIỆP B BĐS CÔNG NGHIỆP B',
    imgActive: icActiveTab,
    imgInActive: icInActiveTab,
    slug: '',
    content: {
      title: 'Phát triển phân khúc trung và cao cấp tại trung tâm TP.HCM với dòng sản phẩm:',
      imgSrc: imgProduct,
      desc: [
        {
          imgSrc: imgInfo,
          content: 'Nhà ở cao tầng & thương mại',
        },
        {
          imgSrc: imgInfo,
          content: 'Khu đô thị thấp tầng',
        },
      ],
    },
  },
];

export const normal: Story = () => (
  <Container>
    <ProductLines
      title="các dòng sản phẩm"
      dataProductLines={dummyData}
    />
  </Container>
);
