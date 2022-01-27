import React from 'react';

import HomeContainer, { HomeData } from 'container/Home';
import MainLayoutContainer from 'container/MainLayout';

const Home: React.FC<BasePageData<HomeData>> = (props) => (
  <MainLayoutContainer>
    <div className="p-home">
      <HomeContainer {...props} />
    </div>
  </MainLayoutContainer>
);

export default Home;
