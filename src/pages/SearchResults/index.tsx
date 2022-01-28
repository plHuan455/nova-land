import React from 'react';

import MainLayout from 'components/templates/MainLayout';
import SearchResultsContainer from 'container/SearchResults';

const SearchResults: React.FC = () => (
  <MainLayout>
    <div className="p-searchResults">
      <SearchResultsContainer />
    </div>
  </MainLayout>
);

export default SearchResults;
