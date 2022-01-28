import { Story, Meta } from '@storybook/react';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import TransactionCard from '.';

import imgTransactionList1 from 'assets/images/TransactionList/img_transaction_list_1.png';

export default {
  title: 'Components/organisms/TransactionCard',
  component: TransactionCard,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <div style={{ maxWidth: '378px', margin: '20px' }}>
    <Router>
      <TransactionCard
        imgSrc={imgTransactionList1}
        title="Sàn giao dịch BĐS Novaland Q.1"
        location="65 Nguyễn Du, P.Bến Nghé, Q.1, TP.HCM"
        phone="(028) 35210553 - 099 779 7979"
        faxNumber="(028) 377 52 999"
        href="/"
      />
    </Router>
  </div>
);
