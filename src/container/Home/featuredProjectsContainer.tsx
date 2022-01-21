import React from 'react';

import dataList from 'assets/dataDummy/featuredProjects';
import FeaturedProjects from 'components/templates/FeaturedProjects';
import Section from 'components/templates/Section';

export interface FeaturedProjectsTypes {
  titleSection: string;
}

interface FeaturedProjectsBlock {
  blocks: FeaturedProjectsTypes;
}

const FeaturedProjectsContainer: React.FC<FeaturedProjectsBlock> = ({
  blocks,
}) => (
  <div className="p-home_featuredProjects">
    <Section>
      <FeaturedProjects
        title={blocks.titleSection}
        featuredProjectList={dataList}
      />
    </Section>
  </div>
);

export default FeaturedProjectsContainer;
