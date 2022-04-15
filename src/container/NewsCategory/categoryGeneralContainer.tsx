import React, { useState, useMemo } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

import NewsCategory, { NewsCategoryItemTypes } from 'components/templates/NewsCategory';
import { getNewsService } from 'services/home';
import { useAppSelector } from 'store/hooks';
import { DEFAULT_QUERY_OPTION } from 'utils/constants';
import { getImageURL, formatDateDDMMYYYY } from 'utils/functions';
import { getPrefixURLCode } from 'utils/language';

const LIMIT = 9;

const CategoryGeneralContainer: React.FC = () => {
  const language = useAppSelector((state) => state.system.language);
  const [page, setPage] = useState<number>(1);
  const { slug } = useParams<{ slug: string }>();

  const { data, isLoading } = useQuery(
    ['getNewsServiceByHighlight', language, slug, page],
    () => getNewsService({
      category_slug: slug,
      page,
      limit: LIMIT,
    }),
    {
      ...DEFAULT_QUERY_OPTION,
      enabled: !!slug,
    },
  );

  const convertData = useMemo(() => {
    let dataList: NewsCategoryItemTypes[] = [];
    let totalPage = 1;
    if (data) {
      dataList = data.data.map((item) => ({
        imgSrc: getImageURL(item.thumbnail),
        ratio: '' as Ratio,
        title: item.title,
        desc: item.description,
        time: formatDateDDMMYYYY(item.publishedAt),
        href: getPrefixURLCode(language, 'NEWS_DETAIL', item.slug),
      }));
      totalPage = data.meta.totalPages;
    }
    return { dataList, totalPage };
  }, [data, language]);

  return (
    <div className="p-newsCategory_categoryGeneral pb-80">
      <NewsCategory
        dataNewsCategory={convertData.dataList}
        totalPage={convertData.totalPage}
        currentPage={page}
        handleChangePage={(pageChange: number) => setPage(pageChange)}
        loading={isLoading}
      />
    </div>
  );
};

export default CategoryGeneralContainer;
