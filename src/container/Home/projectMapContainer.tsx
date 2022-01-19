import React from 'react';

import listProjectMap from 'assets/dataDummy/projectMap';
import img from 'assets/images/ProjectMap/map.png';
import ProjectMap from 'components/templates/ProjectMap';

const ProjectMapContainer: React.FC = () => (
  <div className="p-home_projectMap">
    <ProjectMap
      image={{ height: 725, path: img, width: 471 }}
      listCategory={listProjectMap}
      textProject="DỰ ÁN"
    />
  </div>
);

export default ProjectMapContainer;
