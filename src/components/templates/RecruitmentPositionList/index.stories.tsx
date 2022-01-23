import { Story, Meta } from '@storybook/react';
import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import RecruitmentPositionList from '.';

import dataRecruitmentPositionList from 'assets/dataDummy/recruitmentPositionList';

export default {
  title: 'Components/templates/RecruitmentPositionList',
  component: RecruitmentPositionList,
  argTypes: {},
} as Meta;

export const Normal: Story = () => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div style={{ margin: '20px' }}>
      <Router>
        <RecruitmentPositionList
          totalResults={39}
          dataRecruitmentPositionList={dataRecruitmentPositionList}
          totalPage={10}
          currentPage={currentPage}
          handleChangePage={(page: number) => setCurrentPage(page)}
        />
      </Router>
    </div>
  );
};
