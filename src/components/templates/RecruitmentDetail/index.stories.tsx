import { Story, Meta } from '@storybook/react';
import React from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';

import RecruitmentDetail from '.';

import {
  content, dataBanner, listInfoData, listRelatedJobData,
} from 'assets/dataDummy/recruimentDetail';

export default {
  title: 'Components/templates/RecruitmentDetail',
  component: RecruitmentDetail,
  argTypes: {},
} as Meta;
export const normal: Story = () => (
  <Router>
    <RecruitmentDetail
      content={content}
      dataBanner={dataBanner}
      listInfo={listInfoData}
      listRelatedJob={listRelatedJobData}
      onClickApply={() => {}}
      onClickShare={() => {}}
    />
  </Router>
);
