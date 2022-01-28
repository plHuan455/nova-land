import React from 'react';

import BreadcrumbContainer from './breadcrumbContainer';
import EventDetailTemplateContainer from './eventDetailContainer';

import Section from 'components/templates/Section';
import HelmetContainer from 'container/helmet';

const EventDetailContainer: React.FC = () => (
  <>
    <HelmetContainer />
    <Section modifiers="noPt">
      <BreadcrumbContainer />
      <EventDetailTemplateContainer />
    </Section>
  </>
);

export default EventDetailContainer;
