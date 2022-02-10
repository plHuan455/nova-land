import React, { useEffect, useMemo, useState } from 'react';
import { useQueries, useQuery, UseQueryResult } from 'react-query';

import CorporateGovernance from 'components/templates/CorporateGovernance';
import getDocumentsService, { getDocumentCategoryService, getDocumentYearService } from 'services/documents';
import { DocumentsData, DocumentTypes } from 'services/documents/types';
import { useAppSelector } from 'store/hooks';
import { DEFAULT_QUERY_OPTION } from 'utils/constants';
import { formatDateDDMMYYYY, getImageURL } from 'utils/functions';

interface DocumentTabs extends DocumentTypes {
  page: number;
}

const CorporateGovernanceTableContainer: React.FC = () => {
  const language = useAppSelector((state) => state.system.language);
  const [indexActive, setIndexActive] = useState(0);
  const [documentTab, setDocumentTab] = useState<DocumentTabs[]>([]);

  const { data: documentYearsData } = useQuery(
    ['getDocumentYear', language], () => getDocumentYearService(),
    {
      ...DEFAULT_QUERY_OPTION,
    },
  );

  const { data: documentCategoriesData } = useQuery<DocumentTypes[]>(
    ['getDocumentCategory', language], () => getDocumentCategoryService(),
    {
      ...DEFAULT_QUERY_OPTION,
    },
  );

  const documentData = useQueries(
    documentTab.map((ele) => ({
      queryKey: ['getDocumentCategory', ele.id, ele.page, indexActive, language],
      queryFn: () => getDocumentsService({
        category_id: ele.id,
        year: documentYearsData?.[indexActive].name || '',
        limit: 8,
        page: ele.page,
      }),
      enabled: !!documentYearsData,
      ...DEFAULT_QUERY_OPTION,
    })),
  )as UseQueryResult<APIPaginationResponse<DocumentsData[]>, unknown>[];

  const data = useMemo(() => {
    if (documentTab && documentData) {
      return (documentData).map((list, index) => ({
        dataHeader: [
          {
            id: 1,
            value: documentTab[index].name,
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
                  href: getImageURL(ele.file),
                };
              } else {
                array.push({
                  colSpan: 1,
                  date: formatDateDDMMYYYY(ele.publishedAt),
                  href: getImageURL(ele.file),
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
        currentPage: list.data?.meta.page,
        handleChangePage: (page:number) => {
          const array = [...documentTab];
          array[index].page = page;
          setDocumentTab(array);
        },
      }));
    }
    return [];
  }, [documentData, documentTab]);

  const isLoading = useMemo(() => documentData.some((ele) => ele.isLoading), [documentData]);

  const handleChangeTab = (e: number) => {
    setIndexActive(e);
    if (documentCategoriesData) {
      setDocumentTab(documentCategoriesData.map((element) => ({
        ...element,
        page: 1,
      })));
    }
  };

  useEffect(() => {
    if (documentCategoriesData) {
      setDocumentTab(documentCategoriesData.map((element) => ({
        ...element,
        page: 1,
      })));
    }
  }, [documentCategoriesData, language]);

  return (
    <div className="p-corporateGovernance_corporateGovernanceTable">
      <CorporateGovernance
        loading={isLoading}
        dataGeneral={data}
        dataTabGeneral={documentYearsData || []}
        tabActive={indexActive}
        handleChangeTab={handleChangeTab}
      />
    </div>
  );
};

export default CorporateGovernanceTableContainer;
