import React, { useEffect, useMemo } from 'react';

import ProjectList from 'components/templates/ProjectList';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { getCategoryProjectsAction, getProjectsAction } from 'store/project';
import { getImageURL } from 'utils/functions';

const ProjectListContainer: React.FC = () => {
  const { projectData, categoryProjectsList } = useAppSelector((state) => state.project);
  const dispatch = useAppDispatch();

  const convertListLogo = (nameProjects: string) => {
    const logoProjectList: Array<string> = [];
    if (projectData) {
      projectData.map(
        (item) => item.category.name === nameProjects
          && logoProjectList.push(getImageURL(item.projectLogo)),
      );
    }
    return logoProjectList;
  };

  const convertDataProjectList = useMemo(() => {
    if (categoryProjectsList) {
      return categoryProjectsList.map((val) => ({
        title: val.name,
        listLogo: convertListLogo(val.name),
      }));
    }

    return [];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryProjectsList, projectData, convertListLogo]);

  useEffect(() => {
    if (!categoryProjectsList) {
      dispatch(getCategoryProjectsAction({}));
    }

    if (!projectData) {
      dispatch(getProjectsAction({}));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="p-fieldOfActivity_projectList">
      <ProjectList dataProjectList={convertDataProjectList} />
    </div>
  );
};

export default ProjectListContainer;
