import { yupResolver } from '@hookform/resolvers/yup';
import React, {
  useCallback,
  useEffect, useMemo, useRef, useState,
} from 'react';
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';

import Animate from 'components/organisms/Animate';
import { NewsCardProps } from 'components/organisms/NewsCard';
import SearchResult, { SearchForm } from 'components/templates/SearchResult';
import Section from 'components/templates/Section';
import HelmetContainer from 'container/helmet';
import { getAllNewsService } from 'services/home';
import { formatDateDDMMYYYY, getImageURL } from 'utils/functions';
import { schemaSearchForm } from 'utils/schemas';

interface IntroDataBlock {
  title: string;
}

export type SearchBlock =
  | IntroDataBlock;

const SearchResultsContainer: React.FC<BasePageData<SearchBlock>> = ({ pageData, banners }) => {
  const location = useLocation();
  const [isLoading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [listData, setListData] = useState<NewsCardProps[]>([]);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [totalNews, setTotalNews] = useState<number>(0);
  const isPageSearchRef = useRef(false);
  const currentPageRef = useRef(1);
  const method = useForm<SearchForm>({
    resolver: yupResolver(schemaSearchForm),
    mode: 'onChange',
  });
  // eslint-disable-next-line max-len
  const adBanner = useMemo(() => banners.map((item) => getImageURL(item.data.imageDesktop)), [banners]);

  const fetchNewsListData = useCallback(
    async (params?: {
      keyword?: string;
      page?: number;
      limit?: number;
    }) => {
      try {
        setLoading(true);
        const res = await getAllNewsService(params);

        const newsData = res.data?.map((item) => ({
          imgSrc: getImageURL(item.thumbnail),
          title: item.title,
          desc: item.title,
          href: `/chi-tiet-tin-tuc/${item.slug}`,
          time: formatDateDDMMYYYY(item.publishedAt),
        }));
        setTotalPages(res.meta.totalPages);
        setTotalNews(res.meta.total);
        setListData(newsData);
      } catch {
        // Empty
      } finally {
        setLoading(false);
      }
    },
    [],
  );

  useEffect(() => {
    const searchTextParam = (location.state as any)?.searchText;

    if (searchTextParam) {
      isPageSearchRef.current = true;
      setSearchText(searchTextParam);
      fetchNewsListData({
        keyword: searchTextParam,
        limit: 4,
        page: 1,
      });
      delete location.state;
    }

    if (!isPageSearchRef.current) {
      fetchNewsListData({
        limit: 4,
        page: 1,
      });
    }

    return () => {
      isPageSearchRef.current = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  const handleChangePage = useCallback((pageIpt: number) => {
    currentPageRef.current = pageIpt;
    if (searchText) {
      isPageSearchRef.current = true;
      setSearchText(searchText);
      fetchNewsListData({
        keyword: searchText,
        limit: 4,
        page: pageIpt,
      });
      delete location.state;
    } else {
      fetchNewsListData({
        limit: 4,
        page: pageIpt,
      });
    }
  }, [fetchNewsListData, location.state, searchText]);

  const handleSubmit = useCallback((data: SearchForm) => {
    fetchNewsListData({
      keyword: data.search,
      limit: 4,
      page: 1,
    });
    currentPageRef.current = 1;
  }, [fetchNewsListData]);

  return (
    <>
      <HelmetContainer />
      <Animate type="goUp">
        <div className="u-pt-lg-93 u-pt-sm-82 u-pt-75">
          <Section modifiers="noPb">
            <SearchResult
              method={method}
              submitForm={handleSubmit}
              searchAmount={totalNews}
              newsList={listData}
              title={pageData.title}
              placeholderText="Nhập từ khóa tìm kiếm"
              btnText="Tìm kiếm"
              totalPage={totalPages}
              currentPage={currentPageRef.current}
              handleChangePage={handleChangePage}
              adImgSrc={adBanner}
              isLoading={isLoading}
            />
          </Section>
        </div>
      </Animate>
    </>
  );
};

export default SearchResultsContainer;
