import React from 'react';

import Leadership, { LeadershipProps } from 'components/templates/Leadership';

interface LeadershipContainerProps extends LeadershipProps{}

const LeadershipContainer: React.FC<LeadershipContainerProps> = ({ ...props }) => (
  <div className="p-aboutUs_leadership">
    <Leadership
      {...props}
    />
  </div>
);

export default LeadershipContainer;
