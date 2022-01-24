import React, { useMemo } from 'react';

import FieldActivityDetailsTabContainer, { FieldActivityDetailsTabTypes } from './fieldActivityDetailsTabContainer';
import HeroBannerContainer from './heroBannerContainer';
import ProductLinesContainer from './productLinesContainer';
import ProjectListContainer from './projectListContainer';

import Container from 'components/organisms/Container';
import getBlockData from 'helpers/pageData';

export type FieldOfActivityData =
  | FieldActivityDetailsTabTypes;

const FieldOfActivityContainer: React.FC<BasePageData<FieldOfActivityData>> = ({
  blocks,
}) => {
  const fieldActivityDetailsTabBlock = useMemo(
    () => getBlockData('introduction', blocks) as FieldActivityDetailsTabTypes,
    [blocks],
  );

  return (
    <>
      <HeroBannerContainer />
      <Container>
        <FieldActivityDetailsTabContainer blocks={fieldActivityDetailsTabBlock} />
        <ProductLinesContainer title={fieldActivityDetailsTabBlock.tab1.titleProject} />
        <ProjectListContainer />
      </Container>
    </>
  );
};

export default FieldOfActivityContainer;
