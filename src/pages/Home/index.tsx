import React from 'react';

import MainLayout from 'components/templates/MainLayout';
import HomeContainer, { HomeData } from 'container/Home';

const Home: React.FC<BasePageData<HomeData>> = (props) => (
  <div className="p-home">
    <MainLayout>
      <HomeContainer {...props} />
    </MainLayout>
  </div>
);

export default Home;
