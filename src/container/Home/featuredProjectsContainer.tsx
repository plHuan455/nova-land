import React from 'react';

import dataList from 'assets/dataDummy/featuredProjects';
import FeaturedProjects from 'components/templates/FeaturedProjects';

const FeaturedProjectsContainer: React.FC = () => (
  <div className="p-home_featuredProjects pt-100 pb-100">
    <FeaturedProjects
      title="NHỮNG DỰ ÁN NỔI BẬT"
      featuredProjectList={dataList}
    />
  </div>
);

export default FeaturedProjectsContainer;
