import React from 'react';

import dataOutstandingProjectCard from 'assets/dataDummy/outstandingProject';
import OutstandingProject from 'components/templates/OutstandingProject';

const OutstandingProjectContainer: React.FC = () => (
  <div className="p-aboutUs_outstandingProject">
    <OutstandingProject
      title="DỰ ÁN NỔI BẬT"
      outstandingProjectList={dataOutstandingProjectCard}
    />
  </div>
);

export default OutstandingProjectContainer;
