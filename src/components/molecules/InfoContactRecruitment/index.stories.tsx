import { Story, Meta } from '@storybook/react';
import React from 'react';

import InfoContactRecruitment from '.';

import img1 from 'assets/images/Recruitment/img_create-date.png';
import img3 from 'assets/images/Recruitment/img_location.png';
import img2 from 'assets/images/Recruitment/img_position.png';

export default {
  title: 'Components/molecules/InfoContactRecruitment',
  component: InfoContactRecruitment,
  argTypes: {},
} as Meta;

const dataDumy = [
  {
    imageSrc: img1,
    title: 'Ngày đăng tuyển',
    content: '01/01/2022',
  },
  {
    imageSrc: img2,
    title: 'Cấp bậc',
    content: 'Trưởng phòng',
  },
  {
    imageSrc: img3,
    title: 'Cơ sở',
    content: 'Novaland Group',
  },
];

export const normal: Story = () => (
  <InfoContactRecruitment
    listInfo={dataDumy}
    onClickApply={() => {}}
    onClickShare={() => {}}
  />
);
