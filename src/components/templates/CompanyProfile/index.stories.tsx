import { Story, Meta } from '@storybook/react';
import React from 'react';

import CompanyProfile from '.';

import icon from 'assets/images/CompanyProfile/icon.png';
import image from 'assets/images/CompanyProfile/image.png';

export default {
  title: 'Components/templates/CompanyProfile',
  component: CompanyProfile,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <CompanyProfile
    title="Sơ lược về công ty"
    description="NovaGroup là Tập đoàn kinh tế gồm 3 trụ cột: Novaland Group, Nova Services Group, Nova Consumer Group; </br>
  hoạt động trong các lĩnh vực Bất động sản, Thương mại - Dịch vụ, Nông nghiệp - Hàng tiêu dùng. NovaGroup hoạt động với </br>
  sứ mệnh “Góp phần nâng cao giá trị cuộc sống; Kiến tạo một cộng đồng thịnh vượng – hạnh phúc”."
    iconSrc={icon}
    imgSrc={image}
    subDescription="<b>Novaland Group - Nhân tố chính trong hệ sinh thái NovaGroup</b></br>là Thương hiệu uy tín hàng đầu trong lĩnh vực đầu tư và phát triển Bất động sản tại Việt Nam."
  />
);
