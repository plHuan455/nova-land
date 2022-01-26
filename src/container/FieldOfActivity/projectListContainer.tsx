import React from 'react';

import { ListLogoProjectProps } from 'components/molecules/ListLogoProject';
import ProjectList from 'components/templates/ProjectList';

interface ProjectListProps {
  dataProjectList: ListLogoProjectProps[];
}

const ProjectListContainer: React.FC<ProjectListProps> = ({ dataProjectList }) => (
  <div className="p-fieldOfActivity_projectList">
    <ProjectList
      dataProjectList={dataProjectList}
    />
  </div>
);

export default ProjectListContainer;
