import React from 'react';

import Loading from 'components/atoms/Loading';
import ListLogoProject, { ListLogoProjectProps } from 'components/molecules/ListLogoProject';
import Animate from 'components/organisms/Animate';

interface ProjectListProps {
  dataProjectList: Array<ListLogoProjectProps>;
  loading?: boolean;
}

const ProjectList: React.FC<ProjectListProps> = ({ dataProjectList, loading }) => (
  <div className="t-projectList">
    {loading ? <Loading isShow /> : (
      <>
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
      </>
    )}
  </div>
);

ProjectList.defaultProps = {
  loading: false,
};

export default ProjectList;
