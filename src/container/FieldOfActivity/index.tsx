import React, { useMemo, useEffect } from 'react';

import FieldActivityDetailsTabContainer, { FieldActivityDetailsTabTypes } from './fieldActivityDetailsTabContainer';
import HeroBannerContainer from './heroBannerContainer';
import ProductLinesContainer from './productLinesContainer';
import ProjectListContainer from './projectListContainer';

import Container from 'components/organisms/Container';
import getBlockData from 'helpers/pageData';
import { getRealEstatesAction } from 'store/FieldOfActivity';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { getImageURL } from 'utils/functions';

export type FieldOfActivityData =
  | FieldActivityDetailsTabTypes;

const FieldOfActivityContainer: React.FC<BasePageData<FieldOfActivityData>> = ({
  blocks,
  banners,
}) => {
  const { realEstatesList } = useAppSelector((state) => state.fieldOfActivity);
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

  useEffect(() => {
    dispatch(getRealEstatesAction());
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
        <ProjectListContainer />
      </Container>
    </>
  );
};

export default FieldOfActivityContainer;
