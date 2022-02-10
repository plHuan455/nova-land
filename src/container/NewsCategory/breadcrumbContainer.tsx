import React from 'react';

import Breadcrumb, { BreadcrumbPropsTypes } from 'components/molecules/Breadcrumb';

interface BreadcrumbContainerProps {
  breadcrumbs: BreadcrumbPropsTypes[];
}

const BreadcrumbContainer: React.FC<BreadcrumbContainerProps> = (props) => (
  <div className="p-newsCategory_breadcrumb u-mt-md-24 u-mb-md-27 u-mt-14 u-mb-16">
    <Breadcrumb
      {...props}
    />
  </div>
);

export default BreadcrumbContainer;
