import React from 'react';

import MainLayout from 'components/templates/MainLayout';
import FieldOfActivityContainer, { FieldOfActivityData } from 'container/FieldOfActivity';

const FieldOfActivity: React.FC<BasePageData<FieldOfActivityData>> = (props) => (
  <MainLayout>
    <div className="p-fieldOfActivity">
      <FieldOfActivityContainer {...props} />
    </div>
  </MainLayout>
);

export default FieldOfActivity;
