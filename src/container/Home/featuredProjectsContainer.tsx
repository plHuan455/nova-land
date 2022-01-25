import React, { useMemo } from 'react';

import FeaturedProjects from 'components/templates/FeaturedProjects';
import Section from 'components/templates/Section';
import { useAppSelector } from 'store/hooks';
import { getImageURL } from 'utils/functions';

export interface FeaturedProjectsTypes {
  titleSection: string;
}

interface FeaturedProjectsBlock {
  blocks: FeaturedProjectsTypes;
}

const FeaturedProjectsContainer: React.FC<FeaturedProjectsBlock> = ({
  blocks,
}) => {
  const { realEstatesList } = useAppSelector((state) => state.home);
  const dataList = useMemo(() => realEstatesList?.map((item) => (
    {
      title: item.name,
      src: getImageURL(item.thumbnail),
      content: item.description,
      href: item.slug,
    }
  )), [realEstatesList]);
  return (
    <div className="p-home_featuredProjects">
      <Section>
        <FeaturedProjects
          title={blocks.titleSection}
          featuredProjectList={dataList || []}
        />
      </Section>
    </div>
  );
};

export default FeaturedProjectsContainer;
