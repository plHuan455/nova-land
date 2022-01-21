import React from 'react';

import BreadcrumbContainer from './breadcrumbContainer';
import CategoryGeneralContainer from './categoryGeneralContainer';
import HeroBannerContainer from './heroBannerContainer';

const NewsCategoryContainer: React.FC = () => (
  <>
    <HeroBannerContainer />
    <BreadcrumbContainer />
    <CategoryGeneralContainer />
  </>
);

export default NewsCategoryContainer;
