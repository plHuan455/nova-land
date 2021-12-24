import { Story, Meta } from '@storybook/react';
import React from 'react';

import InvestmentSector, { InvestmentCard, InvestmentCardProps } from '.';

import imgInvestmentSector from 'assets/images/InvestmentSector/img_investmentSector.png';
import imgInvestmentSector2 from 'assets/images/InvestmentSector/img_investmentSector2.png';

export default {
  title: 'Components/templates/InvestmentSector',
  component: InvestmentSector,
  argTypes: {},
} as Meta;

const investmentSectorData: InvestmentCardProps[] = [
  {
    title: 'BĐS TRUNG TÂM',
    desc: 'Phát triển phân khúc trung và cao cấp tại trung tâm TP.HCM vớidòng sản phẩm nhà ởcao tầng & thương mại; khu đô thị thấp tầng.',
    thumbnail: imgInvestmentSector,
  },
  {
    title: 'BĐS TRUNG TÂM',
    desc: 'Phát triển phân khúc trung và cao cấp tại trung tâm TP.HCM vớidòng sản phẩm nhà ởcao tầng & thương mại; khu đô thị thấp tầng.',
    thumbnail: imgInvestmentSector2,
  },
  {
    title: 'BĐS TRUNG TÂM',
    desc: 'Phát triển phân khúc trung và cao cấp tại trung tâm TP.HCM vớidòng sản phẩm nhà ởcao tầng & thương mại; khu đô thị thấp tầng.',
    thumbnail: imgInvestmentSector,
  },
  {
    title: 'BĐS TRUNG TÂM',
    desc: 'Phát triển phân khúc trung và cao cấp tại trung tâm TP.HCM vớidòng sản phẩm nhà ởcao tầng & thương mại; khu đô thị thấp tầng.',
    thumbnail: imgInvestmentSector2,
  },
  {
    title: 'BĐS TRUNG TÂM',
    desc: 'Phát triển phân khúc trung và cao cấp tại trung tâm TP.HCM vớidòng sản phẩm nhà ởcao tầng & thương mại; khu đô thị thấp tầng.',
    thumbnail: imgInvestmentSector,
  },
];

export const normal: Story = () => (
  <InvestmentSector
    title="BẤT ĐỘNG SẢN"
    investmentSectorList={investmentSectorData}
  />
);

export const second: Story = () => (
  <div style={{ maxWidth: '450px' }}>
    <InvestmentCard
      title="BĐS TRUNG TÂM"
      desc="Phát triển phân khúc trung và cao cấp tại trung tâm TP.HCM với dòng sản phẩm
    nhà ở cao tầng & thương mại; khu đô thị thấp tầng."
      thumbnail={imgInvestmentSector}
    />
  </div>
);
