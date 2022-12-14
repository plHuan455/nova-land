import { yupResolver } from '@hookform/resolvers/yup';
import React, {
  useEffect,
  useMemo,
  useState,
} from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useQuery } from 'react-query';
import { useSearchParams } from 'react-router-dom';

import Animate from 'components/organisms/Animate';
import { NewsCardProps } from 'components/organisms/NewsCard';
import SearchResult, { SearchForm } from 'components/templates/SearchResult';
import Section from 'components/templates/Section';
import HelmetContainer from 'container/helmet';
import { getAllNewsService } from 'services/home';
import { useAppSelector } from 'store/hooks';
import { DEFAULT_QUERY_OPTION } from 'utils/constants';
import { formatDateDDMMYYYY, getImageURL } from 'utils/functions';
import { getPrefixURLCode } from 'utils/language';
import { schemaSearchForm } from 'utils/schemas';

interface IntroDataBlock {
  title: string;
}

export type SearchBlock =
  | IntroDataBlock;

const SearchResultsContainer: React.FC<BasePageData<SearchBlock>> = ({ pageData, banners }) => {
  const { t } = useTranslation();
  const language = useAppSelector((state) => state.system.language);
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
    ['getNewsData', currentPage, searchText, language],
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
    let totalNews = 0;
    if (newDataList) {
      newsList = newDataList.data.map((item) => ({
        imgSrc: getImageURL(item.thumbnail),
        title: item.title,
        desc: item.description,
        href: getPrefixURLCode(language, 'NEWS_DETAIL', item.slug),
        time: formatDateDDMMYYYY(item.publishedAt),
      }));
      totalPages = newDataList.meta.totalPages;
      totalNews = newDataList.meta.total;
    }
    return { newsList, totalPages, totalNews };
  }, [language, newDataList]);

  const handleSubmit = (data: SearchForm) => {
    setSearchParams({ keyword: data.search });
  };

  useEffect(() => {
    const keyword = searchParams.get('keyword') || '';
    setSearchText(keyword);
    method.setValue('search', keyword);
    setCurrentPage(1);
  }, [searchParams, method, language]);

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
              placeholderText={t('general.search_keyword')}
              btnText={t('general.search')}
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
