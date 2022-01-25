import React from 'react';

import NewsDetailTemplateContainer from './newsDetailContainer';

import Section from 'components/templates/Section';

const NewsDetailContainer: React.FC = () => (
  <>
    <Section>
      <NewsDetailTemplateContainer />
    </Section>
  </>
);

export default NewsDetailContainer;
