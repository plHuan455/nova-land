import React from 'react';

import FieldOfActivityContainer, { FieldOfActivityData } from 'container/FieldOfActivity';
import MainLayoutContainer from 'container/MainLayout';

const FieldOfActivity: React.FC<BasePageData<FieldOfActivityData>> = (props) => (
  <MainLayoutContainer>
    <div className="p-fieldOfActivity">
      <FieldOfActivityContainer {...props} />
    </div>
  </MainLayoutContainer>
);

export default FieldOfActivity;
