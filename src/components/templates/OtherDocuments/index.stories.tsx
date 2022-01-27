import { Story, Meta } from '@storybook/react';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import OtherDocuments, { dataType } from '.';

import imgPdf from 'assets/images/pdf.png';

export default {
  title: 'Components/templates/OtherDocuments',
  component: OtherDocuments,
  argTypes: {},
} as Meta;

const dataList: dataType[] = [
  {
    pdfImg: imgPdf,
    fileName: 'Nghị quyết Hội đồng quản trị thông qua việc chuyển đổi và tỷ lệ chuyển đổi trái phiếu chuyển đổi quốc tế',
    href: '',
  },
  {
    pdfImg: imgPdf,
    fileName: 'Nghị quyết Hội đồng quản trị thông qua việc chuyển đổi và tỷ lệ chuyển đổi trái phiếu chuyển đổi quốc tế',
    href: '',
  },
  {
    pdfImg: imgPdf,
    fileName: 'Nghị quyết Hội đồng quản trị thông qua việc chuyển đổi và tỷ lệ chuyển đổi trái phiếu chuyển đổi quốc tế',
    href: '',
  },
];
export const normal: Story = () => (
  <Router>
    <OtherDocuments
      heading="Tài Liệu Khác"
      data={dataList}
      btnText="Xem tất cả Tài liệu khác"
    />
  </Router>
);
