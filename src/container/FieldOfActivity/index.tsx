import React, {
  useEffect, useMemo, useState, useCallback,
} from 'react';
import { useQuery } from 'react-query';

import FieldActivityDetailsTabContainer, {
  FieldActivityDetailsTabTypes,
} from './fieldActivityDetailsTabContainer';
import HeroBannerContainer from './heroBannerContainer';

import Container from 'components/organisms/Container';
import ProductLines from 'components/templates/ProductLines';
import ProjectList from 'components/templates/ProjectList';
import HelmetContainer from 'container/helmet';
import getBlockData from 'helpers/pageData';
import {
  getCategoryProjectsService,
  getProjectsService,
} from 'services/project';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { getRealEstatesAction } from 'store/project';
import { DEFAULT_QUERY_OPTION } from 'utils/constants';
import { getImageURL } from 'utils/functions';

export type FieldOfActivityData = FieldActivityDetailsTabTypes;

const FieldOfActivityContainer: React.FC<BasePageData<FieldOfActivityData>> = ({
  blocks,
  banners,
  openGraphData,
  seoData,
}) => {
  const dispatch = useAppDispatch();
  const language = useAppSelector((state) => state.system.language);
  const { realEstatesList } = useAppSelector((state) => state.project);
  const [idRealEstatesSlug, setIDRealEstatesSlug] = useState<number>(0);
  const [indexActive, setIndexActive] = useState(0);

  const fieldActivityDetailsTabBlock = useMemo(
    () => getBlockData('introduction', blocks) as FieldActivityDetailsTabTypes,
    [blocks],
  );

  const { data: projectData, isLoading } = useQuery(
    ['getProjectsData', idRealEstatesSlug, language],
    () => getProjectsService({
      real_estates_id: idRealEstatesSlug,
    }),
    {
      ...DEFAULT_QUERY_OPTION,
      enabled: !!idRealEstatesSlug,
    },
  );

  const { data: categoryProjects } = useQuery(
    ['getCategoryProjectsData', idRealEstatesSlug, language],
    () => getCategoryProjectsService({
      real_estate_id: idRealEstatesSlug,
    }),
    {
      ...DEFAULT_QUERY_OPTION,
      enabled: !!idRealEstatesSlug,
    },
  );

  const convertDataProductLines = useMemo(() => {
    if (realEstatesList) {
      return realEstatesList.map((val) => ({
        id: val.id,
        label: val.name,
        imgActive: getImageURL(val.iconHover),
        imgInActive: getImageURL(val.icon),
        content: {
          title: val.smallDescription,
          imgSrc: getImageURL(val.thumbnail),
          desc:
            val.items.map((item) => ({
              imgSrc: getImageURL(item.icon),
              content: item.description,
            })) || [],
        },
      }));
    }
    return [];
  }, [realEstatesList]);

  useEffect(() => {
    if (realEstatesList && realEstatesList.length) {
      setIDRealEstatesSlug(realEstatesList[0].id);
    }
  }, [realEstatesList, language]);

  useEffect(() => {
    dispatch(getRealEstatesAction({}));
  }, [dispatch, language]);

  const convertListLogo = useCallback(
    (nameProjects: string) => {
      if (projectData) {
        return projectData
          .filter((data) => data.category.name === nameProjects)
          .map((item) => ({
            imgSrc: getImageURL(item.projectLogo),
            href: item.link?.url || '#',
            target: item.link?.target || '_blank',
          }));
      }
      return [];
    },
    [projectData],
  );

  const convertDataProjectList = useMemo(() => {
    if (categoryProjects && projectData && projectData?.length > 0) {
      return categoryProjects.map((val) => ({
        title: val.name,
        listLogo: convertListLogo(val.name),
      }));
    }

    return [];
  }, [categoryProjects, projectData, convertListLogo]);

  return (
    <>
      <HelmetContainer ogData={openGraphData} seoData={seoData} />
      <HeroBannerContainer banners={banners} />
      <Container>
        <FieldActivityDetailsTabContainer
          blocks={fieldActivityDetailsTabBlock}
          tag={indexActive}
          handleChangeTab={(tag) => {
            setIndexActive(tag);
          }}
        />
        {indexActive === 0 && (
        <>
          <div className="p-fieldOfActivity_productLines">
            <ProductLines
              title={fieldActivityDetailsTabBlock.tab1.titleProject}
              dataProductLines={convertDataProductLines}
              indexActive={idRealEstatesSlug}
              handleChangeTab={(id) => setIDRealEstatesSlug(id)}
            />
          </div>
          <div className="p-fieldOfActivity_projectList">
            <ProjectList
              dataProjectList={convertDataProjectList}
              loading={isLoading}
            />
          </div>
        </>
        )}
      </Container>
    </>
  );
};

export default FieldOfActivityContainer;
