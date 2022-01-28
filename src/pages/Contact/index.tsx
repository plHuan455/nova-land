import React from 'react';

import MainLayout from 'components/templates/MainLayout';
import ContactContainer from 'container/Contact';

const Contact: React.FC = () => (
  <MainLayout>
    <div className="p-contact">
      <ContactContainer />
    </div>
  </MainLayout>
);

export default Contact;
