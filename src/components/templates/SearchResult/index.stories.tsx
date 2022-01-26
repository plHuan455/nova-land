/* eslint-disable no-console */
import { yupResolver } from '@hookform/resolvers/yup';
import { Story, Meta } from '@storybook/react';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { BrowserRouter as Router } from 'react-router-dom';

import SearchResult, { SearchForm } from '.';

import newsListSearchResults, { bannerAd } from 'assets/dataDummy/searchResult';
import { schemaSearchForm } from 'utils/schemas';

export default {
  title: 'Components/templates/SearchResult',
  component: SearchResult,
  argTypes: {
    totalPage: {
      control: {
        type: 'number',
      },
      defaultValue: 9,
    },
  },
} as Meta;

export const Normal: Story = ({ totalPage }) => {
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
    <Router>
      <SearchResult
        method={method}
        submitForm={handleSubmit}
        searchAmount={446}
        newsList={newsListSearchResults}
        title="Kết Quả Tìm Kiếm"
        placeholderText="NovaWorld Phan Thiet"
        btnText="Tìm kiếm"
        totalPage={totalPage}
        currentPage={currentPage}
        handleChangePage={(page: number) => setCurrentPage(page)}
        adImgSrc={bannerAd}
      />
    </Router>
  );
};
