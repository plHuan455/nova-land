/* eslint-disable no-console */
import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import newsListSearchResults, { bannerAd } from 'assets/dataDummy/searchResult';
import Animate from 'components/organisms/Animate';
import SearchResult, { SearchForm } from 'components/templates/SearchResult';
import Section from 'components/templates/Section';
import HelmetContainer from 'container/helmet';
import { schemaSearchForm } from 'utils/schemas';

const SearchResultsContainer: React.FC = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [currentPage, setCurrentPage] = useState(1);
  const method = useForm<SearchForm>({
    resolver: yupResolver(schemaSearchForm),
    mode: 'onChange',
  });

  const handleSubmit = (data: SearchForm) => {
    console.log(data);
  };

  return (
    <>
      <HelmetContainer />
      <Animate type="goUp">
        <div className="u-pt-lg-93 u-pt-sm-82 u-pt-75">
          <Section modifiers="noPb">
            <SearchResult
              method={method}
              submitForm={handleSubmit}
              searchAmount={446}
              newsList={newsListSearchResults}
              title="Kết Quả Tìm Kiếm"
              placeholderText="NovaWorld Phan Thiet"
              btnText="Tìm kiếm"
              totalPage={9}
              currentPage={currentPage}
              handleChangePage={(page: number) => setCurrentPage(page)}
              adImgSrc={bannerAd}
            />
          </Section>
        </div>
      </Animate>
    </>
  );
};

export default SearchResultsContainer;
