import React from 'react';

import EventContainer from 'container/Event';
import MainLayout from 'container/MainLayout';

const Event: React.FC<BasePageData<[]>> = (props) => (
  <MainLayout>
    <div className="p-event pt-header">
      <EventContainer {...props} />
    </div>
  </MainLayout>
);

export default Event;
