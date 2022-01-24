import { Story, Meta } from '@storybook/react';
import React from 'react';

import InfoProduct from '.';

import imgProduct from 'assets/images/img-product.png';
import imgInfo from 'assets/images/img_info-product-1.png';

export default {
  title: 'Components/molecules/InfoProduct',
  component: InfoProduct,
  argTypes: {},
} as Meta;

const dataDumy = [
  {
    imgSrc: imgInfo,
    content: 'Nhà ở cao tầng & thương mại',
  },
  {
    imgSrc: imgInfo,
    content: 'Khu đô thị thấp tầng',
  },
];

export const normal: Story = () => (
  <InfoProduct
    title="Phát triển phân khúc trung và cao cấp tại trung tâm TP.HCM với dòng sản phẩm:"
    imgSrc={imgProduct}
    listInfo={dataDumy}
  />
);
