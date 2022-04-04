/* eslint-disable no-nested-ternary */
import React, { useEffect, useMemo, useState } from 'react';
import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';

import { OptionType } from 'components/molecules/Pulldown';
import ProjectListMap, {
  ProjectListMapGround,
  ProjectListMapInfo,
  TypeMapMarker,
} from 'components/templates/ProjectListMap';
import Section from 'components/templates/Section';
import { getProjectsService, getProjectsDetailService } from 'services/project';
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
  const language = useAppSelector((state) => state.system.language);
  const [province, setProvince] = useState<OptionType | null>(null);
  const [project, setProject] = useState<OptionType | null>(null);
  const [locationMarker, setLocationMarker] = useState<TypeMapMarker>({ lat: 0, lng: 0 });
  const [loadingMap, setLoadingMap] = useState(false);

  const systemData = useAppSelector((state) => state.system.dataSystem);

  const { data: projectDataAboutUs } = useQuery(
    ['getProjectsDataAboutUs', province, language],
    () => getProjectsService({
      city_id: province && province.value !== '-1' ? Number(province.value) : undefined,
    }),
    {
      ...DEFAULT_QUERY_OPTION,
      enabled: !!province,
    },
  );

  const { data: projectDetailData, isLoading } = useQuery(
    ['getProjectsDetailData', project, language],
    () => getProjectsDetailService(Number(project?.value)),
    {
      ...DEFAULT_QUERY_OPTION,
      enabled: !!project,
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

  const handleChangeProvince = (option: OptionType) => {
    setProvince(option);
    setProject(null);
  };

  const handleChangeProject = (option: OptionType) => {
    setProject(option);
  };

  useEffect(() => {
    dispatch(getCitiesAction());
  }, [dispatch, language]);

  useEffect(() => {
    const initLocation = async () => {
      try {
        setLoadingMap(true);
        const data = await getProjectsService({ pin: true });
        if (data.length > 0) {
          setLocationMarker({
            lat: data[0].latitude,
            lng: data[0].longtitude,
          });
        }
      } finally {
        setLoadingMap(false);
      }
    };

    initLocation();
  }, [dispatch]);

  useEffect(() => {
    if (projectDetailData) {
      setLocationMarker({
        lat: projectDetailData.latitude,
        lng: projectDetailData.longtitude,
      });
    }
  }, [projectDetailData]);

  return (
    <div className="p-aboutUs_projectListMap">
      <Section>
        <ProjectListMap title={title}>
          <ProjectListMapInfo
            provinceOptions={provinceOptions || []}
            projectOptions={projectOptionData || []}
            valueProvince={province}
            valueProject={project}
            handleChangeProvince={handleChangeProvince}
            handleChangeProject={handleChangeProject}
          />
          <ProjectListMapGround
            mapAPIkey={systemData?.gmapId || ''}
            mapMarker={locationMarker}
            loading={loadingMap || isLoading}
          />
        </ProjectListMap>
      </Section>
    </div>
  );
};

ProjectListMapContainer.defaultProps = {
  title: '',
};

export default ProjectListMapContainer;
