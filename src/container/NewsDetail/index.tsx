import React from 'react';

import BreadcrumbContainer from './breadcrumbContainer';
import NewsDetailTemplateContainer from './newsDetailContainer';

import Section from 'components/templates/Section';

const NewsDetailContainer: React.FC = () => (
  <>
    <Section modifiers="noPt">
      <BreadcrumbContainer />
      <NewsDetailTemplateContainer />
    </Section>
  </>
);

export default NewsDetailContainer;
