import React from 'react';

import FieldActivityDetailsTabContainer from './fieldActivityDetailsTabContainer';
import HeroBannerContainer from './heroBannerContainer';
import ProductLinesContainer from './productLinesContainer';
import ProjectListContainer from './projectListContainer';

import Container from 'components/organisms/Container';

const FieldOfActivityContainer: React.FC = () => (
  <>
    <HeroBannerContainer />
    <Container>
      <FieldActivityDetailsTabContainer />
      <ProductLinesContainer />
      <ProjectListContainer />
    </Container>
  </>
);

export default FieldOfActivityContainer;
