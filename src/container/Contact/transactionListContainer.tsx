import React, {
  useState,
  useMemo,
} from 'react';
import { useQuery } from 'react-query';

import Animate from 'components/organisms/Animate';
import { TransactionCardProps } from 'components/organisms/TransactionCard';
import Section from 'components/templates/Section';
import TransactionList from 'components/templates/TransactionList';
import { getExchangesService } from 'services/exchanges';
import { useAppSelector } from 'store/hooks';
import { DEFAULT_QUERY_OPTION } from 'utils/constants';
import { getImageURL } from 'utils/functions';

interface TransactionListContainerProps {
  title: string;
}

const TransactionListContainer: React.FC<TransactionListContainerProps> = ({ title }) => {
  const [page, setPage] = useState<number>(1);
  const language = useAppSelector((state) => state.system.language);

  const { data: transactionList, isLoading } = useQuery(
    ['GetData', page, language],
    () => getExchangesService({
      limit: 6,
      page,
    }),
    {
      ...DEFAULT_QUERY_OPTION,
    },
  );
  const data = useMemo(() => {
    let dataTransactionList: TransactionCardProps[] = [];
    let totalPage = 1;
    if (transactionList) {
      dataTransactionList = transactionList.data.map((item) => ({
        imgSrc: getImageURL(item.thumbnail),
        title: item.name,
        location: item.address,
        phone: item.phone,
        faxNumber: item.fax,
        href: `https://www.google.com/maps/search/${item.latitude},${item.longtitude}`,
        target: '_blank',
      }));
      totalPage = transactionList.meta.totalPages;
    }
    return { dataTransactionList, totalPage };
  }, [transactionList]);

  return (
    <div className="p-contact_transactionList">
      <Animate type="goUp">
        <Section>
          <TransactionList
            title={title}
            dataTransactionList={data.dataTransactionList}
            totalPage={data.totalPage}
            currentPage={page}
            handleChangePage={(e: number) => setPage(e)}
            loading={isLoading}
          />
        </Section>
      </Animate>
    </div>
  );
};

export default TransactionListContainer;
