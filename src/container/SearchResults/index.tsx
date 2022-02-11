import { yupResolver } from '@hookform/resolvers/yup';
import React, {
  useEffect,
  useMemo,
  useState,
} from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useSearchParams } from 'react-router-dom';

import Animate from 'components/organisms/Animate';
import { NewsCardProps } from 'components/organisms/NewsCard';
import SearchResult, { SearchForm } from 'components/templates/SearchResult';
import Section from 'components/templates/Section';
import HelmetContainer from 'container/helmet';
import { getAllNewsService } from 'services/home';
import { DEFAULT_QUERY_OPTION } from 'utils/constants';
import { formatDateDDMMYYYY, getImageURL } from 'utils/functions';
import { schemaSearchForm } from 'utils/schemas';

interface IntroDataBlock {
  title: string;
}

export type SearchBlock =
  | IntroDataBlock;

const SearchResultsContainer: React.FC<BasePageData<SearchBlock>> = ({ pageData, banners }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchText, setSearchText] = useState(searchParams.get('keyword') || '');
  const [currentPage, setCurrentPage] = useState(1);
  const method = useForm<SearchForm>({
    resolver: yupResolver(schemaSearchForm),
    mode: 'onSubmit',
    defaultValues: {
      search: searchParams.get('keyword') || '',
    },
  });

  const adBanner = useMemo(() => banners.map(
    (item) => getImageURL(item.data.imageDesktop),
  ),
  [banners]);

  const { isLoading, data: newDataList } = useQuery(
    ['getNewsData', currentPage, searchText],
    () => getAllNewsService({
      keyword: searchText,
      limit: 6,
      page: currentPage,
    }),
    DEFAULT_QUERY_OPTION,
  );

  const newsData = useMemo(() => {
    let newsList: NewsCardProps[] = [];
    let totalPages = 1;
    let totalNews = 1;
    if (newDataList) {
      newsList = newDataList.data.map((item) => ({
        imgSrc: getImageURL(item.thumbnail),
        title: item.title,
        desc: item.description,
        href: `/tin-tuc-chi-tiet/${item.slug}`,
        time: formatDateDDMMYYYY(item.publishedAt),
      }));
      totalPages = newDataList.meta.totalPages;
      totalNews = newDataList.meta.total;
    }
    return { newsList, totalPages, totalNews };
  }, [newDataList]);

  const handleSubmit = (data: SearchForm) => {
    setSearchParams({ keyword: data.search });
  };

  useEffect(() => {
    const keyword = searchParams.get('keyword') || '';
    setSearchText(keyword);
    method.setValue('search', keyword);
    setCurrentPage(1);
  }, [searchParams, method]);

  return (
    <>
      <HelmetContainer />
      <Animate type="goUp">
        <div className="u-pt-lg-93 u-pt-sm-82 u-pt-75">
          <Section modifiers="noPb">
            <SearchResult
              method={method}
              submitForm={handleSubmit}
              searchAmount={newsData.totalNews}
              newsList={newsData.newsList}
              title={pageData.title}
              placeholderText="Nhập từ khóa tìm kiếm"
              btnText="Tìm kiếm"
              totalPage={newsData.totalPages}
              currentPage={currentPage}
              handleChangePage={(page: number) => setCurrentPage(page)}
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
