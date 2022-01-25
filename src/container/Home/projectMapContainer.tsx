import React, { useMemo } from 'react';

import img from 'assets/images/ProjectMap/map.png';
import ProjectMap from 'components/templates/ProjectMap';
import { useAppSelector } from 'store/hooks';
import { getImageURL } from 'utils/functions';

export interface ProjectMapTypes {
  titleSection: string;
}

interface ProjectMapBlock {
  blocks: ProjectMapTypes;
}

const ProjectMapContainer: React.FC<ProjectMapBlock> = ({
  blocks,
}) => {
  const { realEstatesList } = useAppSelector((state) => state.home);
  const listProjectMap = useMemo(() => realEstatesList?.map((item) => (
    {
      id: item.id,
      title: item.name,
      listPoint: item.items.map((e, idx) => (
        {
          id: idx,
          point: {
            x: 281,
            y: 483,
          },
          reference: {
            images: getImageURL(e.icon),
          },
        }
      )),
    }
  )), [realEstatesList]);

  return (
    <div className="p-home_outStandingNumbers">
      <ProjectMap
        image={{ height: 725, path: img, width: 471 }}
        listCategory={listProjectMap}
        textProject={blocks.titleSection}
      />
    </div>
  );
};

export default ProjectMapContainer;
