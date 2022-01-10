import { Story, Meta } from '@storybook/react';
import React from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';

import InvestmentSector, { InvestmentCard } from '.';

import investmentSectorData from 'assets/dataDummy/investmentSector';
import imgInvestmentSector from 'assets/images/InvestmentSector/img_investmentSector.png';

export default {
  title: 'Components/templates/InvestmentSector',
  component: InvestmentSector,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <Router>
    <InvestmentSector
      title="BẤT ĐỘNG SẢN"
      investmentSectorList={investmentSectorData}
    />
  </Router>
);

export const small: Story = () => (
  <Router>
    <InvestmentSector
      title="BẤT ĐỘNG SẢN"
      investmentSectorList={investmentSectorData}
      isSmall
    />
  </Router>
);

export const card: Story = () => (
  <Router>
    <div style={{ maxWidth: '450px' }}>
      <InvestmentCard
        title="BĐS TRUNG TÂM"
        desc="Phát triển phân khúc trung và cao cấp tại trung tâm TP.HCM vớidòng sản phẩm nhà ởcao tầng & thương mại; khu đô thị thấp tầng. Phát triển phân khúc trung và cao cấp tại trung tâm TP.HCM vớidòng sản phẩm nhà ởcao tầng & thương mại; khu đô thị thấp tầng."
        thumbnail={imgInvestmentSector}
        href="/"
        btnText="Tìm Hiểu Thêm"
      />
    </div>
  </Router>
);
