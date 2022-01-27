/* eslint-disable no-console */
import { Story, Meta } from '@storybook/react';
import React from 'react';

import AwardList from '.';

import tabsData from 'assets/dataDummy/awardList';

export default {
  title: 'Components/templates/AwardList',
  component: AwardList,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <AwardList
    title="GIẢI THƯỞNG"
    desc="Những thành tựu của Tập đoàn Novaland được ghi nhận, vinh danh qua nhiều giải thưởng, danh hiệu uy tín trong và ngoài nước; thể hiện nỗ lực không ngừng trong việc quy hoạch đồng bộ BĐS tại các vị trí chiến lược, kiến tạo cộng đồng nhân văn tiên tiến với môi trường sống tiện nghi, hiện đại, góp phần vào sự phát triển bền vững của xã hội."
    tabsData={tabsData}
    handleActiveTab={(index) => console.log(index)}
  />
);
