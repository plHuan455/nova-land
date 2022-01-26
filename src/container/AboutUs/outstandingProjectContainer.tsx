import React from 'react';

import OutstandingProject, { OutstandingProjectProps } from 'components/templates/OutstandingProject';

interface OutstandingProjectContainerProps extends OutstandingProjectProps{}

const OutstandingProjectContainer: React.FC<OutstandingProjectContainerProps> = ({ ...props }) => (
  <div className="p-aboutUs_outstandingProject">
    <OutstandingProject
      {...props}
    />
  </div>
);

export default OutstandingProjectContainer;
