/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import MainLayout from 'components/templates/MainLayout';
import AboutUSContainer, { AboutUsBlock } from 'container/AboutUs';

const AboutUs: React.FC<BasePageData<AboutUsBlock>> = (props) => (
  <MainLayout>
    <div className="p-aboutUs">
      <AboutUSContainer {...props} />
    </div>
  </MainLayout>
);

export default AboutUs;
