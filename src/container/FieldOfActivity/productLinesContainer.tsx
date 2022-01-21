import React from 'react';

import icActiveTab from 'assets/images/ic_activeTab.png';
import icInActiveTab from 'assets/images/ic_inActiveTab.png';
import imgProduct from 'assets/images/img-product.png';
import imgInfo from 'assets/images/img_info-product-1.png';
import ProductLines from 'components/templates/ProductLines';

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
  {
    label: 'ĐÔ THỊ VỆ TINH',
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
  {
    label: 'ĐÔ THỊ NGHỈ DƯỠNG',
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
  {
    label: 'BĐS CÔNG NGHIỆP',
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
  {
    label: 'BĐS CÔNG NGHIỆP A',
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
  {
    label: 'BĐS CÔNG NGHIỆP B',
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

const ProductLinesContainer: React.FC = () => (
  <div className="p-fieldOfActivity_productLines">
    <ProductLines
      title="các dòng sản phẩm"
      dataProductLines={dummyData}
    />
  </div>
);

export default ProductLinesContainer;
