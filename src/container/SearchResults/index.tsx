import { yupResolver } from '@hookform/resolvers/yup';
import React, {
  useMemo,
  useState,
  useEffect,
} from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useSearchParams, useNavigate } from 'react-router-dom';

import Animate from 'components/organisms/Animate';
import SearchResult, { SearchForm } from 'components/templates/SearchResult';
import Section from 'components/templates/Section';
import HelmetContainer from 'container/helmet';
import { getAllNewsService } from 'services/home';
import { useAppSelector } from 'store/hooks';
import { DEFAULT_QUERY_OPTION } from 'utils/constants';
import { formatDateDDMMYYYY, getImageURL, getSlugByTemplateCode } from 'utils/functions';
import { schemaSearchForm } from 'utils/schemas';

interface IntroDataBlock {
  title: string;
}

export type SearchBlock =
  | IntroDataBlock;

const SearchResultsContainer: React.FC<BasePageData<SearchBlock>> = ({ pageData, banners }) => {
  const navigate = useNavigate();
  const { staticPage } = useAppSelector((state) => state.menus);
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchText, setSearchText] = useState(searchParams.get('keyword') || '');
  const [currentPage, setCurrentPage] = useState(1);
  const method = useForm<SearchForm>({
    resolver: yupResolver(schemaSearchForm),
    mode: 'onChange',
  });
  // eslint-disable-next-line max-len
  const adBanner = useMemo(() => banners.map((item) => getImageURL(item.data.imageDesktop)), [banners]);

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
    if (newDataList && newDataList?.data.length > 0) {
      return newDataList.data.map((item) => ({
        imgSrc: getImageURL(item.thumbnail),
        title: item.title,
        desc: item.title,
        href: `/tin-tuc-chi-tiet/${item.slug}`,
        time: formatDateDDMMYYYY(item.publishedAt),
      }));
    }
    return [];
  }, [newDataList]);

  const totalPages = useMemo(() => {
    if (newDataList?.meta) {
      return newDataList.meta.totalPages;
    }
    return 1;
  }, [newDataList]);

  const totalNews = useMemo(() => {
    if (newDataList?.meta) {
      return newDataList.meta.total;
    }
    return 1;
  }, [newDataList]);

  const handleSubmit = (data: SearchForm) => {
    setSearchParams({ keyword: data.search });
    setSearchText(data.search);
    setCurrentPage(1);
    if (data.search) {
      navigate(`${getSlugByTemplateCode('SEARCH', staticPage)}?keyword=${data.search}`);
    } else {
      navigate(`${getSlugByTemplateCode('SEARCH', staticPage)}`);
    }
  };

  useEffect(() => {
    if (searchParams) {
      setSearchText(searchParams.get('keyword') || '');
      setCurrentPage(1);
    }
  }, [searchParams]);

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
              newsList={newsData}
              title={pageData.title}
              placeholderText="Nhập từ khóa tìm kiếm"
              btnText="Tìm kiếm"
              totalPage={totalPages}
              currentPage={currentPage}
              handleChangePage={(page: number) => setCurrentPage(page)}
              adImgSrc={adBanner}
              isLoading={isLoading}
              searchText={searchText}
            />
          </Section>
        </div>
      </Animate>
    </>
  );
};

export default SearchResultsContainer;
