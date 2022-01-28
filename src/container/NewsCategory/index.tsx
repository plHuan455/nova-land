import React from 'react';

import BreadcrumbContainer from './breadcrumbContainer';
import CategoryGeneralContainer from './categoryGeneralContainer';
import HeroBannerContainer from './heroBannerContainer';

import HelmetContainer from 'container/helmet';

const NewsCategoryContainer: React.FC = () => (
  <>
    <HelmetContainer />
    <HeroBannerContainer />
    <BreadcrumbContainer />
    <CategoryGeneralContainer />
  </>
);

export default NewsCategoryContainer;
