import React from 'react';

import { NewsCategoryCard, NewsCategoryCardProps } from '../NewsCategory';

import Button from 'components/atoms/Button';
import Heading from 'components/atoms/Heading';
import Container from 'components/organisms/Container';

interface LatestJobsProps {
  title: string,
  listJob: NewsCategoryCardProps[],
}

const LatestJobs: React.FC<LatestJobsProps> = ({
  title,
  listJob,
}) => (
  <div className="t-latestJobs">
    <Container>
      <div className="t-latestJobs_heading">
        <Heading modifiers={['700', 'center', 'jet', '30x42', 'fontCalibri', 'uppercase']} content={title} />
      </div>
      <div className="t-latestJobs_content">
        {
          listJob.map((item, index) => (
            <div key={`t-latestJobs-${index.toString()}`} className="t-latestJobs_item">
              <NewsCategoryCard
                {...item}
              />
            </div>
          ))
        }
      </div>
      <div className="t-latestJobs_button">
        <Button modifiers="outlineSpanishGray">Xem thêm Tất cả việc làm</Button>
      </div>
    </Container>
  </div>
);

export default LatestJobs;
