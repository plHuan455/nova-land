import React from 'react';

import MainLayout from 'components/templates/MainLayout';
import EventDetailContainer from 'container/EventDetail';

const EventDetail: React.FC = () => (
  <MainLayout>
    <div className="p-eventDetail">
      <EventDetailContainer />
    </div>
  </MainLayout>
);

export default EventDetail;
