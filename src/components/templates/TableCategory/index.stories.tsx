import { Story, Meta } from '@storybook/react';
import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import TableCategory from '.';

import { dataHeaderList, dataBodyList } from 'assets/dataDummy/tableCategory';

export default {
  title: 'Components/templates/TableCategory',
  component: TableCategory,
  argTypes: {},
} as Meta;

export const Normal: Story = () => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div style={{ margin: '20px' }}>
      <Router>
        <TableCategory
          dataHeader={dataHeaderList}
          dataBody={dataBodyList}
          totalPage={10}
          currentPage={currentPage}
          handleChangePage={(page: number) => setCurrentPage(page)}
        />
      </Router>
    </div>
  );
};
