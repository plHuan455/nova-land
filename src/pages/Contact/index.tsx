import React from 'react';

import ContactContainer from 'container/Contact';
import MainLayoutContainer from 'container/MainLayout';

const Contact: React.FC = () => (
  <MainLayoutContainer>
    <div className="p-contact">
      <ContactContainer />
    </div>
  </MainLayoutContainer>
);

export default Contact;
