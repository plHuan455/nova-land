import React, { useEffect, useMemo, useState } from 'react';
import { useQuery } from 'react-query';

import FieldActivityDetailsTabContainer, { FieldActivityDetailsTabTypes } from './fieldActivityDetailsTabContainer';
import HeroBannerContainer from './heroBannerContainer';

import Container from 'components/organisms/Container';
import ProductLines from 'components/templates/ProductLines';
import ProjectList from 'components/templates/ProjectList';
import HelmetContainer from 'container/helmet';
import getBlockData from 'helpers/pageData';
import { getProjectsService } from 'services/project';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { getCategoryProjectsAction, getRealEstatesAction } from 'store/project';
import { DEFAULT_QUERY_OPTION } from 'utils/constants';
import { getImageURL } from 'utils/functions';

export type FieldOfActivityData =
  | FieldActivityDetailsTabTypes;

const FieldOfActivityContainer: React.FC<BasePageData<FieldOfActivityData>> = ({
  blocks,
  banners,
}) => {
  const dispatch = useAppDispatch();
  const language = useAppSelector((state) => state.system.language);
  const { realEstatesList, categoryProjectsList } = useAppSelector((state) => state.project);
  const [idRealEstatesSlug, setIDRealEstatesSlug] = useState<number>(2);
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
    if (idRealEstatesSlug) {
      dispatch(getCategoryProjectsAction({
        real_estate_id: idRealEstatesSlug,
      }));
    }
  }, [dispatch, idRealEstatesSlug, language]);

  useEffect(() => {
    dispatch(getRealEstatesAction({}));
  }, [dispatch, language]);

  const convertListLogo = (nameProjects: string) => {
    if (projectData) {
      return projectData.filter((data) => data.category.name === nameProjects).map(
        (item) => ({
          imgSrc: getImageURL(item.projectLogo),
          href: item.link?.url || '#',
          target: item.link?.target || '_blank',
        }),
      );
    }
    return [];
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

  return (
    <>
      <HelmetContainer />
      <HeroBannerContainer banners={banners} />
      <Container>
        <FieldActivityDetailsTabContainer blocks={fieldActivityDetailsTabBlock} />
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
      </Container>
    </>
  );
};

export default FieldOfActivityContainer;
