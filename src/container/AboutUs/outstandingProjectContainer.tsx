import React, { useMemo } from 'react';
import { useQuery } from 'react-query';

import OutstandingProject from 'components/templates/OutstandingProject';
import { getProjectsService } from 'services/project';
import { useAppSelector } from 'store/hooks';
import { DEFAULT_QUERY_OPTION } from 'utils/constants';
import { getImageURL } from 'utils/functions';

interface OutstandingProjectContainerProps {
  title: string;
}

const OutstandingProjectContainer: React.FC<OutstandingProjectContainerProps> = ({ ...props }) => {
  const language = useAppSelector((state) => state.system.language);

  const { data: projectDataHighlight } = useQuery(
    ['getProjectsDataFilterByHighlight', language], () => getProjectsService({
      highlight: true,
    }), {
      ...DEFAULT_QUERY_OPTION,
    },
  );
  const outStandingProjectData = useMemo(() => projectDataHighlight?.map((item) => ({
    imgSrc: getImageURL(item.thumbnail),
    title: item.name,
    href: item.link?.url || '#',
    target: item.link?.target,
  })), [projectDataHighlight]);

  return (
    <div className="p-aboutUs_outstandingProject">
      <OutstandingProject
        {...props}
        outstandingProjectList={outStandingProjectData || []}
      />
    </div>
  );
};

export default OutstandingProjectContainer;
