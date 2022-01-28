import React from 'react';

import FieldOfActivityContainer, { FieldOfActivityData } from 'container/FieldOfActivity';

const FieldOfActivity: React.FC<BasePageData<FieldOfActivityData>> = (props) => (
  <div className="p-fieldOfActivity">
    <FieldOfActivityContainer {...props} />
  </div>
);

export default FieldOfActivity;
