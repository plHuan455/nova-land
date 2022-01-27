import React from 'react';

import listJobs from 'assets/dataDummy/latestJobsDummy';
import LatestJobs from 'components/templates/LatestJobs';
import Section from 'components/templates/Section';

const LatestJobsContainer: React.FC = () => (
  <div className="p-recruitment_latestJobsContainer">
    <Section>
      <LatestJobs
        title="Các việc làm mới nhất"
        listJob={listJobs}
      />
    </Section>
  </div>
);

export default LatestJobsContainer;
