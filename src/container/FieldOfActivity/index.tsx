import React, { useMemo, useEffect } from 'react';

import FieldActivityDetailsTabContainer, { FieldActivityDetailsTabTypes } from './fieldActivityDetailsTabContainer';
import HeroBannerContainer from './heroBannerContainer';
import ProductLinesContainer from './productLinesContainer';
import ProjectListContainer from './projectListContainer';

import Container from 'components/organisms/Container';
import getBlockData from 'helpers/pageData';
import {
  getRealEstatesAction,
  getCategoryProjectsAction,
  getProjectsAction,
} from 'store/FieldOfActivity';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { getImageURL } from 'utils/functions';

export type FieldOfActivityData =
  | FieldActivityDetailsTabTypes;

const FieldOfActivityContainer: React.FC<BasePageData<FieldOfActivityData>> = ({
  blocks,
  banners,
}) => {
  const {
    realEstatesList,
    categoryProjectsList,
    projectsList,
  } = useAppSelector((state) => state.fieldOfActivity);
  const dispatch = useAppDispatch();

  const fieldActivityDetailsTabBlock = useMemo(
    () => getBlockData('introduction', blocks) as FieldActivityDetailsTabTypes,
    [blocks],
  );

  const convertDataProductLines = useMemo(() => {
    if (realEstatesList) {
      return realEstatesList.map((val) => ({
        label: val.name,
        imgActive: getImageURL(val.iconHover),
        imgInActive: getImageURL(val.icon),
        content: {
          title: val.smallDescription,
          imgSrc: getImageURL(val.thumbnail),
          desc: val.items.map((item) => ({
            imgSrc: getImageURL(item.icon),
            content: item.description,
          })) || [],
        },
      }));
    }
    return [];
  }, [realEstatesList]);

  const convertListLogo = (
    nameProjects: string,
  ) => {
    const dummyListLogo: Array<string> = [];
    if (projectsList) {
      projectsList.map(
        (item) => item.category.name === nameProjects
        && dummyListLogo.push(getImageURL(item.projectLogo)),
      );
    }
    return dummyListLogo;
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
  }, [categoryProjectsList, projectsList, convertListLogo]);

  useEffect(() => {
    dispatch(getRealEstatesAction({}));
    dispatch(getCategoryProjectsAction({}));
    dispatch(getProjectsAction({}));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <HeroBannerContainer banners={banners} />
      <Container>
        <FieldActivityDetailsTabContainer blocks={fieldActivityDetailsTabBlock} />
        <ProductLinesContainer
          title={fieldActivityDetailsTabBlock.tab1.titleProject}
          dataProductLines={convertDataProductLines}
        />
        <ProjectListContainer dataProjectList={convertDataProjectList} />
      </Container>
    </>
  );
};

export default FieldOfActivityContainer;
