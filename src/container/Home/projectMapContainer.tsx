import React, {
  useEffect,
  useMemo,
  useState,
  useCallback,
} from 'react';
import { useQuery } from 'react-query';

import img from 'assets/images/bg_project_list_map.png';
import ProjectMap from 'components/templates/ProjectMap';
import { getProjectsService } from 'services/project';
import { useAppDispatch, useAppSelector } from 'store/hooks';
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
  const { realEstatesList } = useAppSelector((state) => state.project);
  const [idActive, setIdActive] = useState(0);
  const [currentRealEstates, setCurrentRealEstates] = useState('');
  const dispatch = useAppDispatch();
  const { maps } = useAppSelector((state) => state.maps);

  // TODO: maps
  const { data: projectDataList } = useQuery(
    ['getProjectsDataFilterByHighlight', currentRealEstates], () => getProjectsService({
      real_estates_slug: currentRealEstates,
    }), {
      ...DEFAULT_QUERY_OPTION,
      enabled: !!currentRealEstates,
    },
  );
  const convertedProjectData = useMemo(() => {
    if (projectDataList) {
      return projectDataList.map((item) => ({
        ...item,
        thumbnail: getImageURL(item.projectLogo),
      }));
    }
    return [];
  }, [projectDataList]);

  const listProjectMap = useMemo(() => maps && realEstatesList?.map((item) => (
    {
      id: item.id,
      title: item.name,
      listPoint: maps.map((e, idx) => (
        {
          id: idx,
          point: {
            x: e.pointX,
            y: e.pointY,
          },
          reference: {
            images: '',
          },
          projects: e.projects,
        }
      )),
    }
  )), [realEstatesList, maps]);

  useEffect(() => {
    if (realEstatesList && realEstatesList?.length > 0) {
      setCurrentRealEstates(realEstatesList[0].slug);
    }
  }, [realEstatesList]);

  useEffect(() => {
    if (!maps) {
      dispatch(getMapsAction({}));
    }
  }, [dispatch, maps]);

  const handleClick = useCallback((id: number) => {
    setIdActive(id);
    if (realEstatesList) {
      const realEstateObj = realEstatesList.find((item) => item.id === id);
      setCurrentRealEstates(realEstateObj?.slug || '');
    }
  }, [realEstatesList]);

  return (
    <div className="p-home_outStandingNumbers">
      <ProjectMap
        image={{ height: 508, path: img, width: 320 }}
        listCategory={listProjectMap}
        textProject={blocks.titleSection}
        handleSelect={handleClick}
        idActive={idActive}
        projectDataList={convertedProjectData}
      />
    </div>
  );
};

export default ProjectMapContainer;
