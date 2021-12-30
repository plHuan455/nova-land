import { Story, Meta } from '@storybook/react';
import React from 'react';

import Leadership, { LeadershipCard, LeadershipDetail } from '.';

import dataLeadershipList from 'assets/dataDummy/leadership';
import imgLeadership1 from 'assets/images/Leadership/img_leadership1.png';
import Text from 'components/atoms/Text';

export default {
  title: 'Components/templates/Leadership',
  component: Leadership,
  argTypes: {
    isShow: {
      control: {
        type: 'boolean',
        options: [true, false],
      },
      defaultValue: false,
    },
  },
} as Meta;

export const card: Story = ({ isShow }) => (
  <LeadershipCard
    gender="Ông"
    name="Bùi Thành Nhơn"
    imgSrc={imgLeadership1}
    isShow={isShow}
  >
    <Text
      modifiers={['16x24', 'davysGrey', '400', 'fontLexend']}
      content="Nhà sáng lập - Chủ tịch Hội đồng Quản trị"
    />
  </LeadershipCard>
);

export const cardDetail: Story = () => (
  <LeadershipDetail
    gender="Ông"
    name="Bùi Thành Nhơn"
    position="Nhà sáng lập - Chủ tịch Hội đồng Quản trị"
    imgSrc={imgLeadership1}
    achievement={[
      'Cử nhân Nông nghiệp. Tốt nghiệp Executive MBA, HSB-TUCK, Đại học Dartmouth, Hoa Kỳ.',
      'Là một trong những chủ doanh nghiệp tư nhân đầu tiên tại TP.HCM từ những năm 1980. Thành viên Tổ chức doanh nhân thế giới (YPO - WPO).',
    ]}
    slogan="Con người Novaland với giá trị cốt lõi: Hiệu quả - Chính trực - Chuyên nghiệp là tài sản quý báu của
    Tập đoàn; là chìa khóa của sự thành công sẽ sớm hiện thực được Sứ mạng, Hoài bão của Novaland Group."
  />
);

export const normal: Story = () => (
  <Leadership
    title="BAN LÃNH ĐẠO"
    tabDataLeadership={dataLeadershipList}
  />
);
