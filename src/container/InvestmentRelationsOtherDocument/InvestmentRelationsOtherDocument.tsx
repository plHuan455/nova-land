/* eslint-disable no-console */
import React, { useState, useEffect, useMemo } from 'react';
import { useQuery } from 'react-query';

import imgPdf from 'assets/images/downImg.png';
import { OptionType } from 'components/molecules/Pulldown';
import InvestmentRelationsOtherDocument from 'components/templates/InvestmentRelationsOtherDocument';
import { getOtherDocumentCategoriesDetailService } from 'services/documents';
import { getOtherDocumentCategoriesAction } from 'store/documents';
import { useAppSelector, useAppDispatch } from 'store/hooks';
import { DEFAULT_QUERY_OPTION } from 'utils/constants';
import { formatDateDDMMYYYY, getImageURL } from 'utils/functions';

const dummyOption: OptionType[] = [
  { value: 'latest', label: 'Mới nhất' },
  { value: 'oldest', label: 'Cũ nhất' },

];
const InvestmentRelations: React.FC = () => {
  const dispatch = useAppDispatch();
  const [selectedSort, setSelectedSort] = useState<OptionType | null>(null);
  const language = useAppSelector((state) => state.system.language);
  const { otherCategories } = useAppSelector((state) => state.documents);
  const [page, setPage] = useState(1);
  const [indexActive, setIndexActive] = useState<number>(1);

  const { data: otherDocumentList, isLoading } = useQuery(
    ['GetOtherDocumentListHighlight', indexActive, page, language, selectedSort],
    () => getOtherDocumentCategoriesDetailService(indexActive, {
      sort: selectedSort?.value,
      limit: 2,
      page,
    }),
    {
      ...DEFAULT_QUERY_OPTION,
    },
  );

  const convertDataOtherDocument = useMemo(() => {
    if (otherDocumentList) {
      return otherDocumentList.data.map((val) => ({
        img: imgPdf,
        title: val.name,
        date: formatDateDDMMYYYY(val.publishedAt),
        titleBtn: 'Xem và tải PDF',
        href: getImageURL(val.file),
      }));
    }
    return [];
  }, [otherDocumentList]);

  useEffect(() => {
    dispatch(getOtherDocumentCategoriesAction({
      limit: 50,
    }));
  }, [dispatch, language]);

  return (
    <div className="p-corporateGovernance_InvestmentRelationsOtherDocument">
      <InvestmentRelationsOtherDocument
        dataMenu={otherCategories}
        dataRegulations={convertDataOtherDocument}
        selectedSort={selectedSort}
        sortOptions={dummyOption}
        handleSort={(value) => setSelectedSort(value)}
        currPage={page}
        totalPage={otherDocumentList?.meta.totalPages || 1}
        handleChangePage={(e: number) => setPage(e)}
        handleClick={(e: number) => {
          setIndexActive(e);
        }}
        loading={isLoading}
      />
    </div>
  );
};

export default InvestmentRelations;
