import React from 'react';

import HomeContainer, { HomeData } from 'container/Home';

const Home: React.FC<BasePageData<HomeData>> = (props) => (
  <div className="p-home">
    <HomeContainer {...props} />
  </div>
);

export default Home;
