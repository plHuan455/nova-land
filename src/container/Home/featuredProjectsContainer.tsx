import React, { useMemo } from 'react';
import { useQuery } from 'react-query';

import FeaturedProjects from 'components/templates/FeaturedProjects';
import Section from 'components/templates/Section';
import { getProjectsService } from 'services/project';
import { DEFAULT_QUERY_OPTION } from 'utils/constants';
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
  const { isLoading, data } = useQuery(
    ['GetProjectHighlight'],
    () => getProjectsService({ highlight: true }),
    DEFAULT_QUERY_OPTION,
  );

  const dataList = useMemo(
    () => data?.map((item) => ({
      title: item.name,
      src: getImageURL(item.thumbnail),
      content: item.description,
      href: item.link?.url || '#',
      target: item.link?.target,
    })),
    [data],
  );

  return (
    <div className="p-home_featuredProjects">
      <Section>
        <FeaturedProjects
          title={blocks.titleSection}
          featuredProjectList={dataList || []}
          loading={isLoading}
        />
      </Section>
    </div>
  );
};

export default FeaturedProjectsContainer;
