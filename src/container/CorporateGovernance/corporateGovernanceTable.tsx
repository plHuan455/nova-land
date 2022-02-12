import React, { useMemo, useState } from 'react';
import { useQueries, useQuery, UseQueryResult } from 'react-query';

import CorporateGovernance from 'components/templates/CorporateGovernance';
import getDocumentsService, { getDocumentCategoryService, getDocumentYearService } from 'services/documents';
import { DocumentsData, DocumentTypes } from 'services/documents/types';
import { DEFAULT_QUERY_OPTION } from 'utils/constants';
import { formatDateDDMMYYYY } from 'utils/functions';

const CorporateGovernanceTableContainer: React.FC = () => {
  const [indexActive, setIndexActive] = useState(0);

  const handleChangeTab = (e: number) => {
    setIndexActive(e);
  };

  const { data: documentYearsData } = useQuery(
    'getDocumentYear', () => getDocumentYearService(),
    {
      ...DEFAULT_QUERY_OPTION,
    },
  );

  const { data: documentCategoriesData } = useQuery<DocumentTypes[]>(
    'getDocumentCategory', () => getDocumentCategoryService(),
    {
      ...DEFAULT_QUERY_OPTION,
    },
  );

  const documentData = useQueries(
    documentCategoriesData?.map((ele) => ({
      queryKey: ['getDocumentCategory', ele.id, indexActive],
      queryFn: () => getDocumentsService({
        category_id: ele.id,
        year: documentYearsData?.[indexActive].name || '',
        limit: 1,
      }),
      enabled: !!documentYearsData,
      ...DEFAULT_QUERY_OPTION,
    })) ?? [],
  )as UseQueryResult<APIPaginationResponse<DocumentsData[]>, unknown>[];

  const data = useMemo(() => {
    if (documentCategoriesData && documentData) {
      return (documentData).map((list, index) => ({
        dataHeader: [
          {
            id: 1,
            value: documentCategoriesData[index].name,
          },
          {
            id: 2,
            value: 'Quý 1',
          },
          {
            id: 2,
            value: 'Quý 2',
          },
          {
            id: 3,
            value: 'Quý 3',
          },
          {
            id: 4,
            value: 'Quý 4',
          },
        ],
        dataBody: list.data?.data.map((ele) => ({
          documentName: ele.name,
          dataByQuarter: ['1', '2', '3', '4'].reduce<{
            colSpan?: number;
            date?: string;
            href?: string;
            target?: string
          }[]>((prevVal, currVal) => {
            const array = [...prevVal];
            if (ele.quarters.includes(currVal)) {
              const currIdx = ele.quarters.findIndex((quarter) => quarter === currVal);
              const prevItem = prevVal[array.length - 1];
              if (currIdx > 0) {
                array[array.length - 1] = {
                  colSpan: (prevItem?.colSpan || 1) + 1,
                  date: formatDateDDMMYYYY(ele.publishedAt),
                  href: ele.file,
                  target: '_blank',
                };
              } else {
                array.push({
                  colSpan: 1,
                  date: formatDateDDMMYYYY(ele.publishedAt),
                  href: ele.file,
                  target: '_blank',
                });
              }
            } else {
              array.push({
                colSpan: 1,
                date: '',
              });
            }
            return array;
          }, []),
        })) || [],
        totalPage: list.data?.meta.totalPages || 1,
      }));
    }
    return [];
  }, [documentData, documentCategoriesData]);

  return (
    <div className="p-corporateGovernance_corporateGovernanceTable">
      <CorporateGovernance
        dataGeneral={data}
        dataTabGeneral={documentYearsData || []}
        tabActive={indexActive}
        handleChangeTab={handleChangeTab}
      />
    </div>
  );
};

export default CorporateGovernanceTableContainer;
