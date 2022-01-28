import React from 'react';

import BreadcrumbContainer from './breadcrumbContainer';
import NewsDetailTemplateContainer from './newsDetailContainer';

import Section from 'components/templates/Section';
import HelmetContainer from 'container/helmet';

const NewsDetailContainer: React.FC = () => (
  <>
    <HelmetContainer />
    <Section modifiers="noPt">
      <BreadcrumbContainer />
      <NewsDetailTemplateContainer />
    </Section>
  </>
);

export default NewsDetailContainer;
