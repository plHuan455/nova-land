import React from 'react';

import BreadcrumbContainer from './breadcrumbContainer';
import EventDetailTemplateContainer from './eventDetailContainer';

const EventDetailContainer: React.FC = () => (
  <>
    <BreadcrumbContainer />
    <EventDetailTemplateContainer />
  </>
);

export default EventDetailContainer;
