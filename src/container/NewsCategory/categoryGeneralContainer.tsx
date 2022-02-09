import React, { useState, useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import NewsCategory, { NewsCategoryItemTypes } from 'components/templates/NewsCategory';
import { getNewsService } from 'services/home';
import { getImageURL, formatDateDDMMYYYY } from 'utils/functions';

const LIMIT = 9;
const PAGE = 1;

const CategoryGeneralContainer: React.FC = () => {
  const [isLoading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [page, setPage] = useState<number>(1);
  const [listData, setListData] = useState<NewsCategoryItemTypes[]>([]);
  const { slug } = useParams<{ slug: string }>();

  const fetchNewsCategoryData = useCallback(async (params?: {
    categorySlug?: string;
    page?: number;
    limit?: number;
  }) => {
    try {
      setLoading(true);
      const res = await getNewsService({
        category_slug: params?.categorySlug,
        page: params?.page,
        limit: params?.limit,

      });
      const newsData = res.data.map((item) => ({
        imgSrc: getImageURL(item.thumbnail),
        ratio: '' as Ratio,
        title: item.title,
        desc: item.description,
        time: formatDateDDMMYYYY(item.publishedAt),
        href: `/chi-tiet-tin-tuc/${item.slug}`,
      }));
      setTotalPages(res.meta.totalPages);
      setPage(res.meta.page);
      setListData(newsData);
    } catch {
      // Empty
    } finally {
      setLoading(false);
    }
  }, []);

  const handleChangePage = async (pageChange: number) => {
    setLoading(true);
    try {
      if (totalPages > page) {
        const res = await getNewsService({
          category_slug: slug,
          page: pageChange,
          limit: LIMIT,
        });
        const newsData = res.data.map((item) => ({
          imgSrc: getImageURL(item.thumbnail),
          ratio: '' as Ratio,
          title: item.title,
          desc: item.description,
          time: formatDateDDMMYYYY(item.publishedAt),
          href: `/chi-tiet-tin-tuc/${item.slug}`,
        }));
        setTotalPages(res.meta.totalPages);
        setPage(res.meta.page);
        setListData(newsData);
      } else {
        setListData(listData.slice(0, LIMIT));
        setPage(1);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNewsCategoryData({
      categorySlug: slug,
      limit: LIMIT,
      page: PAGE,
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  return (
    <div className="p-newsCategory_categoryGeneral pb-80">
      <NewsCategory
        dataNewsCategory={listData}
        totalPage={totalPages}
        currentPage={page}
        handleChangePage={handleChangePage}
        loading={isLoading}
      />
    </div>
  );
};

export default CategoryGeneralContainer;
