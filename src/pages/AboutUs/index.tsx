/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import AboutUSContainer, { AboutUsBlock } from 'container/AboutUs';

const AboutUs: React.FC<BasePageData<AboutUsBlock>> = (props) => (
  <div className="p-aboutUs">
    <AboutUSContainer {...props} />
  </div>
);

export default AboutUs;
