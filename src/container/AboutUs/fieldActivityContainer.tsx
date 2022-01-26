import React from 'react';

import FieldActivity, { FieldActivityProps } from 'components/templates/FieldActivity';

interface FieldActivityContainerProps extends FieldActivityProps { }

const FieldActivityContainer: React.FC<FieldActivityContainerProps> = ({ ...props }) => (
  <div className="p-aboutUs_fieldActivity pt-100">
    <FieldActivity
      {...props}
    />
  </div>
);

export default FieldActivityContainer;
