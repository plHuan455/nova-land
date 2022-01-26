/* eslint-disable no-nested-ternary */
/* eslint-disable react/require-default-props */
import React, { useEffect, useMemo, useState } from 'react';
import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';

import img from 'assets/images/bg_project_list_map.svg';
import { OptionType } from 'components/molecules/Pulldown';
import ProjectListMap, {
  ItemBranch,
  ProjectListMapGround,
  ProjectListMapInfo,
} from 'components/templates/ProjectListMap';
import geMapService from 'services/maps';
import { getProjectsService } from 'services/project';
import { useAppSelector } from 'store/hooks';
import { getCitiesAction } from 'store/location';
import { getProjectsAction } from 'store/project';
import { DEFAULT_QUERY_OPTION } from 'utils/constants';

interface ProjectListMapContainerProps {
  title?: string;
}

const ProjectListMapContainer: React.FC<ProjectListMapContainerProps> = ({
  title,
}) => {
  const dispatch = useDispatch();
  const { listCities } = useAppSelector((state) => state.location);
  const { projectData } = useAppSelector((state) => state.project);
  const [province, setProvince] = useState<OptionType | null>(null);
  const [project, setProject] = useState<OptionType | null>(null);

  const [listSelectProject, setSelectProjectList] = useState<ItemBranch[]>([]);

  const projectOptionData = useMemo(() => projectData?.map((item) => ({
    value: String(item.id),
    label: item.name,
  })), [projectData]);

  // const listPoint = () => {
  //   const find = listProjectSelect.find((x) => String(x.id) === project?.value);
  //   if (find) return [{ id: find.id, point: find.point }];
  //   return listProjectSelect.map((x) => ({ id: x.id, point: x.point }));
  // };

  const { data: projectDataAboutUs } = useQuery(
    'getProjectsDataAboutUs',
    () => getProjectsService({
      about_us: true,
    }),
    {
      ...DEFAULT_QUERY_OPTION,
    },
  );

  const provinceOptions = listCities?.map((item) => ({
    value: String(item.id),
    label: item.name,
  }));

  const listProject = useMemo(
    () => projectDataAboutUs?.map((item) => ({
      title: item.name,
      href: item.link,
    })),
    [projectDataAboutUs],
  );

  const filterMaps = async (cityId?: number, projectId?: number) => {
    const params = cityId ? { city_id: cityId } : projectId ? { project_id: projectId } : {};
    const prjList = await geMapService(params);
    const convertPrjList = prjList.map((item) => ({
      id: item.id,
      point: {
        x: item.pointX,
        y: item.pointY,
      },
    }));
    setSelectProjectList(convertPrjList);
  };

  const handleChangeProvince = (option: OptionType) => {
    setProvince(option);
    filterMaps(Number(option.value), Number(project?.value));
  };

  const handleChangeProject = (option: OptionType) => {
    setProject(option);
    filterMaps(Number(province?.value), Number(option.value));
  };

  useEffect(() => {
    if (!listCities) {
      dispatch(getCitiesAction());
    }
    if (!projectData) {
      dispatch(getProjectsAction({}));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="p-aboutUs_projectListMap pt-80 pb-100">
      <ProjectListMap title={title}>
        <ProjectListMapInfo
          listProject={listProject || []}
          provinceOptions={provinceOptions || []}
          projectOptions={projectOptionData || []}
          valueProvince={province}
          valueProject={project}
          handleChangeProvince={handleChangeProvince}
          handleChangeProject={handleChangeProject}
        />
        <ProjectListMapGround
          image={{
            path: img,
            width: 373,
            height: 593,
          }}
          listPoint={listSelectProject}
        />
      </ProjectListMap>
    </div>
  );
};

export default ProjectListMapContainer;
