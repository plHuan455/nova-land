import React from 'react';

import dataList from 'assets/dataDummy/featuredProjects';
import FeaturedProjects from 'components/templates/FeaturedProjects';
import Section from 'components/templates/Section';

const FeaturedProjectsContainer: React.FC = () => (
  <div className="p-home_featuredProjects">
    <Section>
      <FeaturedProjects
        title="NHỮNG DỰ ÁN NỔI BẬT"
        featuredProjectList={dataList}
      />
    </Section>
  </div>
);

export default FeaturedProjectsContainer;
