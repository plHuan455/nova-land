import React from 'react';

import MainLayoutContainer from 'container/MainLayout';
import SearchResultsContainer from 'container/SearchResults';

const SearchResults: React.FC = () => (
  <MainLayoutContainer>
    <div className="p-searchResults">
      <SearchResultsContainer />
    </div>
  </MainLayoutContainer>
);

export default SearchResults;
