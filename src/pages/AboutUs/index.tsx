/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import AboutUSContainer, { AboutUsBlock } from 'container/AboutUs';
import MainLayoutContainer from 'container/MainLayout';

const AboutUs: React.FC<BasePageData<AboutUsBlock>> = (props) => (
  <MainLayoutContainer>
    <div className="p-aboutUs">
      <AboutUSContainer {...props} />
    </div>
  </MainLayoutContainer>
);

export default AboutUs;
