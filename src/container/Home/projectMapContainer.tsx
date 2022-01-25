import React from 'react';

import listProjectMap from 'assets/dataDummy/projectMap';
import img from 'assets/images/ProjectMap/map.png';
import ProjectMap from 'components/templates/ProjectMap';

export interface ProjectMapTypes {
  titleSection: string;
}

interface ProjectMapBlock {
  blocks: ProjectMapTypes;
}

const ProjectMapContainer: React.FC<ProjectMapBlock> = ({
  blocks,
}) => (
  <div className="p-home_outStandingNumbers">
    <ProjectMap
      image={{ height: 725, path: img, width: 471 }}
      listCategory={listProjectMap}
      textProject={blocks.titleSection}
    />
  </div>
);

export default ProjectMapContainer;
