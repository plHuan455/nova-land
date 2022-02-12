import React from 'react';

import MainLayout from 'components/templates/MainLayout';
import ContactContainer, { ContactBlock } from 'container/Contact';

const Contact: React.FC<BasePageData<ContactBlock>> = (props) => (
  <MainLayout>
    <div className="p-contact">
      <ContactContainer {...props} />
    </div>
  </MainLayout>
);

export default Contact;
