import React from 'react';

import dataTransactionList from 'assets/dataDummy/transactionList';
import Animate from 'components/organisms/Animate';
import Section from 'components/templates/Section';
import TransactionList from 'components/templates/TransactionList';

interface TransactionListContainerProps {
  title: string;
}

const TransactionListContainer: React.FC<TransactionListContainerProps> = ({ title }) => (
  <div className="p-contact_transactionList">
    <Animate type="goUp">
      <Section>
        <TransactionList
          title={title}
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
