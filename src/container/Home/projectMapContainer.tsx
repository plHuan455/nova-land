import React, {
  useEffect,
  useMemo,
  useState,
} from 'react';
import { useQuery } from 'react-query';

import img from 'assets/images/bg_project_list_map.svg';
import ProjectMap, { ItemBranch } from 'components/templates/ProjectMap';
import { getProjectsService, getRealEstatesService } from 'services/project';
import {
  useAppDispatch,
  useAppSelector,
} from 'store/hooks';
import { getMapsAction } from 'store/maps';
import { DEFAULT_QUERY_OPTION } from 'utils/constants';
import { getImageURL } from 'utils/functions';

export interface ProjectMapTypes {
  titleSection: string;
}

interface ProjectMapBlock {
  blocks: ProjectMapTypes;
}

const ProjectMapContainer: React.FC<ProjectMapBlock> = ({
  blocks,
}) => {
  const { maps } = useAppSelector((state) => state.maps);
  const [idCurrentRealEstates, setIDCurrentRealEstates] = useState<number>(2);
  const language = useAppSelector((state) => state.system.language);
  const dispatch = useAppDispatch();

  // TODO: maps
  const { data: projectDataList } = useQuery(
    ['getProjectsDataFilterByHighlight', idCurrentRealEstates, language], () => getProjectsService({
      on_going: true,
      real_estates_id: idCurrentRealEstates,
    }), {
      ...DEFAULT_QUERY_OPTION,
      enabled: !!idCurrentRealEstates,
    },
  );

  const { data: realEstatesList } = useQuery(
    ['getRealEstatesListHighlight', language],
    () => getRealEstatesService({ is_map_home: true }),
    DEFAULT_QUERY_OPTION,
  );

  const convertedProjectData = useMemo(() => {
    if (projectDataList) {
      return projectDataList.map((item) => ({
        ...item,
        thumbnail: getImageURL(item.darkBackgroundLogo),
      }));
    }
    return [];
  }, [projectDataList]);

  const listProjectMap = useMemo(() => maps && realEstatesList?.map((item) => {
    const data: ItemBranch[] = [];
    if (projectDataList?.length) {
      const projectIds = projectDataList.map((project) => project.id);
      maps.forEach((p, idx) => {
        const isValidPoint = p.projects.some((i) => projectIds?.includes(i));
        const pointObj = {
          id: idx,
          point: {
            x: p.pointX,
            y: p.pointY,
          },
          reference: {
            images: '',
          },
          projects: p.projects,
        };
        return isValidPoint && data.push(pointObj);
      });
    }
    return {
      id: item.id,
      title: item.name,
      listPoint: data,
    };
  }), [realEstatesList, maps, projectDataList]);

  useEffect(() => {
    if (realEstatesList && realEstatesList?.length > 0) {
      setIDCurrentRealEstates(realEstatesList[0].id);
    }
  }, [realEstatesList, language]);

  useEffect(() => {
    dispatch(getMapsAction({}));
  }, [dispatch, language]);

  return (
    <div className="p-home_outStandingNumbers">
      <ProjectMap
        image={{ height: 508, path: img, width: 320 }}
        listCategory={listProjectMap}
        textProject={blocks.titleSection}
        handleSelect={(id) => setIDCurrentRealEstates(id)}
        idActive={idCurrentRealEstates}
        projectDataList={convertedProjectData}
      />
    </div>
  );
};

export default ProjectMapContainer;
