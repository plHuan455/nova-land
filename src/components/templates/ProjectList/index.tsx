import React from 'react';

import ListLogoProject, { ListLogoProjectProps } from 'components/molecules/ListLogoProject';
import Animate from 'components/organisms/Animate';

interface ProjectListProps {
  dataProjectList: Array<ListLogoProjectProps>;
}

const ProjectList: React.FC<ProjectListProps> = ({ dataProjectList }) => (
  <div className="t-projectList">
    {dataProjectList.map((item, idx) => (
      <div className="t-projectList_project" key={`project-${idx.toString()}`}>
        <Animate type="goUp">
          <ListLogoProject
            title={item.title}
            listLogo={item.listLogo}
          />
        </Animate>
      </div>
    ))}
  </div>
);

ProjectList.defaultProps = {
};

export default ProjectList;
