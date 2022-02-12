import React from 'react';

import EventContainer from 'container/Event';
import MainLayout from 'container/MainLayout';

const Event: React.FC = () => (
  <MainLayout>
    <div className="p-event pt-header">
      <EventContainer />
    </div>
  </MainLayout>
);

export default Event;
