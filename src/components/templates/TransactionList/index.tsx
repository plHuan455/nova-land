import React from 'react';

import Heading from 'components/atoms/Heading';
import Loading from 'components/atoms/Loading';
import Pagination from 'components/molecules/Pagination';
import Container from 'components/organisms/Container';
import TransactionCard, { TransactionCardProps } from 'components/organisms/TransactionCard';

export interface TransactionListProps {
  title: string;
  dataTransactionList: TransactionCardProps[];
  totalPage: number;
  currentPage?: number;
  handleChangePage?: (page: number) => void;
  loading?: boolean;
}

const TransactionList: React.FC<TransactionListProps> = ({
  title,
  dataTransactionList,
  totalPage,
  currentPage,
  handleChangePage,
  loading,
}) => (
  <div className="t-transactionList">
    <Container>
      <Heading modifiers={['30x42', '700', 'fontCalibri', 'jet', 'center', 'uppercase']}>
        {title}
      </Heading>
      <div className="t-transactionList_wrapper u-mt-md-36 u-mt-20">
        {loading ? <Loading isShow /> : (
          <div className="t-transactionList_content">
            {dataTransactionList.length > 0 && dataTransactionList.map((item, index) => (
              <div className="t-transactionList_item" key={`transactionList-${index.toString()}`}>
                <TransactionCard {...item} />
              </div>
            ))}
          </div>
        )}
        {totalPage > 1 && (
          <div className="t-transactionList_pagination u-mt-lg-40 u-mt-30">
            <Pagination
              totalPage={totalPage}
              pageCurrent={currentPage}
              handleChangePage={(page: number) => handleChangePage && handleChangePage(page)}
            />
          </div>
        )}
      </div>
    </Container>
  </div>
);

export default TransactionList;
