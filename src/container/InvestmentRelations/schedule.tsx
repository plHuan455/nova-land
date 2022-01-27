import React from 'react';

import Animate from 'components/organisms/Animate';
import Schedule, { ScheduleProps } from 'components/templates/Schedule';

interface ScheduleContainerProps extends ScheduleProps{}

const ScheduleContainer: React.FC<ScheduleContainerProps> = ({ ...props }) => (
  <Animate type="goUp">
    <div className="p-investmentRelations_schedule">
      <Schedule
        {...props}
      />
    </div>
  </Animate>
);

export default ScheduleContainer;
