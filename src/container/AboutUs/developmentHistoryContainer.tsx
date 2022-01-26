import React from 'react';

import DevelopmentHistory, { DevelopmentHistoryProps } from 'components/templates/DevelopmentHistory';

interface DevelopmentHistoryContainerProps extends DevelopmentHistoryProps{}

const DevelopmentHistoryContainer: React.FC<DevelopmentHistoryContainerProps> = ({ ...props }) => (
  <div className="p-aboutUs_developmentHistory">
    <DevelopmentHistory
      {...props}
    />
  </div>
);

export default DevelopmentHistoryContainer;
