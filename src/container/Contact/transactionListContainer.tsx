import React from 'react';

import dataTransactionList from 'assets/dataDummy/transactionList';
import Animate from 'components/organisms/Animate';
import Section from 'components/templates/Section';
import TransactionList from 'components/templates/TransactionList';

const TransactionListContainer: React.FC = () => (
  <div className="p-contact_transactionList">
    <Animate type="goUp">
      <Section>
        <TransactionList
          title="Các sàn giao dịch của Novaland group"
          dataTransactionList={dataTransactionList}
          totalPage={10}
          total={9}
          currentPage={1}
          handleChangePage={(page: number) => (page)}
        />
      </Section>
    </Animate>
  </div>
);

export default TransactionListContainer;
