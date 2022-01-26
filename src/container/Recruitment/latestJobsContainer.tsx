import React from 'react';

import listJobs from 'assets/dataDummy/latestJobsDummy';
import LatestJobs from 'components/templates/LatestJobs';

const LatestJobsContainer: React.FC = () => (
  <div className="p-recruitment_latestJobsContainer">
    <LatestJobs
      title="Các việc làm mới nhất"
      listJob={listJobs}
    />
  </div>
);

export default LatestJobsContainer;
