import React from 'react';

import EventDetailContainer from 'container/EventDetail';
import MainLayoutContainer from 'container/MainLayout';

const EventDetail: React.FC = () => (
  <MainLayoutContainer>
    <div className="p-eventDetail">
      <EventDetailContainer />
    </div>
  </MainLayoutContainer>
);

export default EventDetail;
