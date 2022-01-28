/* eslint-disable no-nested-ternary */
import React, { useEffect, useMemo, useState } from 'react';
import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';

import img from 'assets/images/bg_project_list_map.png';
import { OptionType } from 'components/molecules/Pulldown';
import ProjectListMap, {
  ItemBranch,
  ProjectListMapGround,
  ProjectListMapInfo,
} from 'components/templates/ProjectListMap';
import getMapService from 'services/maps';
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
  const [isLoading, setLoading] = useState(false);

  const projectOptionData = useMemo(
    () => projectData?.map((item) => ({
      value: String(item.id),
      label: item.name,
    })),
    [projectData],
  );

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
    try {
      const params = cityId
        ? { city_id: cityId }
        : projectId
          ? { project_id: projectId }
          : {};
      setLoading(true);
      const prjList = await getMapService(params);
      const convertPrjList = prjList.map((item) => ({
        id: item.id,
        point: {
          x: item.pointX,
          y: item.pointY,
        },
      }));
      setSelectProjectList(convertPrjList);
    } catch {
      // Empty
    } finally {
      setLoading(false);
    }
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
            width: 320,
            height: 508,
          }}
          listPoint={listSelectProject}
          loading={isLoading}
        />
      </ProjectListMap>
    </div>
  );
};

ProjectListMapContainer.defaultProps = {
  title: '',
};

export default ProjectListMapContainer;
