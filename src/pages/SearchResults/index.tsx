import React from 'react';

import MainLayout from 'components/templates/MainLayout';
import SearchResultsContainer, { SearchBlock } from 'container/SearchResults';

const SearchResults: React.FC<BasePageData<SearchBlock>> = (props) => (
  <MainLayout>
    <div className="p-searchResults">
      <SearchResultsContainer {...props} />
    </div>
  </MainLayout>
);

export default SearchResults;
