import React from 'react';
import ReactDOM from 'react-dom';

import ProductLines from '.';

import icActiveTab from 'assets/images/ic_activeTab.png';
import icInActiveTab from 'assets/images/ic_inActiveTab.png';
import imgProduct from 'assets/images/img-product.png';
import imgInfo from 'assets/images/img_info-product-1.png';

const dummyData = [
  {
    label: 'BĐS Trung Tâm',
    imgActive: icActiveTab,
    imgInActive: icInActiveTab,
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

describe('<ProductLines />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <ProductLines
        title="các dòng sản phẩm"
        dataProductLines={dummyData}
      />, div,
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
