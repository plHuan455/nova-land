import React from 'react';

import BreadcrumbContainer from './breadcrumbContainer';
import NewsDetailTemplateContainer from './newsDetailContainer';

// import Section from 'components/templates/Section';

const NewsDetailContainer: React.FC = () => (
  <>
    <BreadcrumbContainer />
    <NewsDetailTemplateContainer />
  </>
);

export default NewsDetailContainer;
