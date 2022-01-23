import React from 'react';

import ScheduleList from 'assets/dataDummy/Schedule';
import Animate from 'components/organisms/Animate';
import Schedule from 'components/templates/Schedule';

const ScheduleContainer: React.FC = () => (
  <Animate type="goUp">
    <div className="p-investmentRelations_schedule">
      <Schedule
        subTitle="Chuỗi sự kiện đón Giáng sinh và năm mới tại Novaland"
        heading="Lịch Sự Kiện"
        dataCard={ScheduleList}
        modifiers="fourItem"
        btnText="Xem tất cả lịch sự kiện"
      />
    </div>
  </Animate>
);

export default ScheduleContainer;
