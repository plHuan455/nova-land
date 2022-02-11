import { Story, Meta } from '@storybook/react';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import TransactionList from '.';

import dataTransactionList from 'assets/dataDummy/transactionList';

export default {
  title: 'Components/templates/TransactionList',
  component: TransactionList,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <div style={{ height: '100vh' }}>
    <Router>
      <TransactionList
        title="Các sàn giao dịch của Novaland group"
        dataTransactionList={dataTransactionList}
        totalPage={1}
        currentPage={1}
        handleChangePage={(page: number) => (page)}
      />
    </Router>
  </div>
);
