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
import { DEFAULT_QUERY_OPTION } from 'utils/constants';

interface ProjectListMapContainerProps {
  title?: string;
}

const ProjectListMapContainer: React.FC<ProjectListMapContainerProps> = ({
  title,
}) => {
  const dispatch = useDispatch();
  const { listCities } = useAppSelector((state) => state.location);
  const [province, setProvince] = useState<OptionType | null>(null);
  const [project, setProject] = useState<OptionType | null>(null);

  const [listSelectProject, setSelectProjectList] = useState<ItemBranch[]>([]);
  const [isLoading, setLoading] = useState(false);

  const { data: projectDataAboutUs } = useQuery(
    ['getProjectsDataAboutUs', province],
    () => getProjectsService({
      about_us: true,
      city_id: province && province.value !== '-1' ? Number(province.value) : undefined,
    }),
    {
      ...DEFAULT_QUERY_OPTION,
      enabled: !!province,
    },
  );

  const { data: projectData } = useQuery(
    'getProjectsData',
    () => getProjectsService({
      about_us: true,
    }),
    {
      ...DEFAULT_QUERY_OPTION,
    },
  );

  const projectOptionData = useMemo(
    () => projectDataAboutUs?.map((item) => ({
      value: String(item.id),
      label: item.name,
    })),
    [projectDataAboutUs],
  );

  const provinceOptions = useMemo(() => {
    if (listCities) {
      const allObj = {
        value: '-1',
        label: 'Tất cả',
      };
      const provinceList = listCities.map((item) => ({
        value: String(item.id),
        label: item.name,
      }));
      return [allObj, ...provinceList];
    }
    return [];
  }, [listCities]);

  const listProject = useMemo(
    () => projectData?.map((item) => ({
      title: item.name,
      href: item.link,
    })),
    [projectData],
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
