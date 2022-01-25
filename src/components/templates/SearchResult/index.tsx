import React from 'react';
import { Controller, FormProvider, UseFormReturn } from 'react-hook-form';

import Button from 'components/atoms/Button';
import Divider from 'components/atoms/Divider';
import Heading from 'components/atoms/Heading';
import Image from 'components/atoms/Image';
import Input from 'components/atoms/Input';
import Pagination from 'components/molecules/Pagination';
import Container from 'components/organisms/Container';
import NewsCard, { NewsCardProps } from 'components/organisms/NewsCard';
import Section from 'components/templates/Section';
import useDeviceQueries from 'hooks/useDeviceQueries';

export interface SearchForm {
  search: string;
}

export interface SearchResultProps {
  method: UseFormReturn<SearchForm>;
  submitForm: (data: SearchForm) => void;
  searchAmount: number;
  newsList?: NewsCardProps[];
  title: string,
  totalPage: number;
  currentPage?: number;
  handleChangePage?: (page: number) => void;
  adImgSrc?: Array<string>;
  btnText: string;
  placeholderText:string;
}

const SearchResult: React.FC<SearchResultProps> = ({
  method,
  submitForm,
  searchAmount,
  newsList,
  title,
  btnText,
  placeholderText,
  adImgSrc,
  totalPage,
  currentPage,
  handleChangePage,
}) => {
  const { isMobile } = useDeviceQueries();
  return (
    <div className="t-searchResult">
      <Container>
        <div className="t-searchResult_heading">
          <Heading modifiers={['jet', '600', '52x65', 'center', 'fontNoto']} content={title} />
        </div>
        <FormProvider {...method}>
          <form onSubmit={method.handleSubmit(submitForm)} noValidate>
            <div className="t-searchResult_searchInput">
              <div className="t-searchResult_searchInputGroup">
                <Controller
                  name="search"
                  render={({
                    field,
                    fieldState: { error },
                  }) => (
                    <Input
                      autoComplete="off"
                      id="search"
                      placeholder={placeholderText}
                      error={error?.message}
                      {...field}
                    />
                  )}
                  defaultValue=""
                />
                <Button type="submit">
                  {btnText}
                </Button>
              </div>
            </div>
          </form>
        </FormProvider>
        <Section>
          <div className="t-searchResult_wrapper">
            <div className="t-searchResult_content">
              <div className="t-searchResult_amount">
                <Heading modifiers={['600', '24x30', 'fontLexend', 'jet']}>
                  Có
                  {' '}
                  {searchAmount}
                  {' '}
                  kết quả được tìm thấy
                </Heading>
              </div>
              <div className="t-searchResult_list">
                {newsList && newsList.map((item, idx) => (
                  <div className="t-searchResult_list-item" key={`key-${idx.toString()}`}>
                    {idx !== 0
                && <Divider />}
                    <NewsCard
                      {...item}
                      variant="smallVertical"
                      modifiers="smallTitle"
                    />
                  </div>
                ))}
              </div>
            </div>
            {!isMobile
              && (
              <div className="t-searchResult_ad">
                {adImgSrc && adImgSrc.map((item, index) => (
                  <div className="t-searchResult_adItem" key={`key-${index.toString()}`}>
                    <Image
                      src={item || ''}
                      ratio="348x720"
                      alt="image-ad"
                    />
                  </div>
                ))}
              </div>
              )}
          </div>
          {totalPage > 0 && (
            <div className="t-searchResult_pagination u-mt-md-40 u-mt-28">
              <Pagination
                totalPage={totalPage}
                pageCurrent={currentPage}
                handleChangePage={(page: number) => handleChangePage && handleChangePage(page)}
              />
            </div>
          )}
        </Section>
      </Container>
    </div>
  );
};

SearchResult.defaultProps = {
};

export default SearchResult;
