import React, { useEffect, useMemo } from 'react';

import img from 'assets/images/ProjectMap/map.png';
import ProjectMap from 'components/templates/ProjectMap';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { getMapsAction } from 'store/maps';
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
  const { realEstatesList } = useAppSelector((state) => state.project);
  const dispatch = useAppDispatch();
  const { maps } = useAppSelector((state) => state.maps);

  // TODO: maps
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

  useEffect(() => {
    if (!maps) {
      dispatch(getMapsAction({}));
    }
  }, [dispatch, maps]);

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
