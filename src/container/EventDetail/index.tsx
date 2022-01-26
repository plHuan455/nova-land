import React from 'react';

import BreadcrumbContainer from './breadcrumbContainer';
import EventDetailTemplateContainer from './eventDetailContainer';

import Section from 'components/templates/Section';

const EventDetailContainer: React.FC = () => (
  <>
    <Section>
      <BreadcrumbContainer />
      <EventDetailTemplateContainer />
    </Section>
  </>
);

export default EventDetailContainer;
