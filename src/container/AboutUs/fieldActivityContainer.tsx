import React from 'react';

import imgFieldActivity from 'assets/images/img_field_activity.png';
import FieldActivity from 'components/templates/FieldActivity';
import Section from 'components/templates/Section';

const FieldActivityContainer: React.FC = () => (
  <div className="p-aboutUs_fieldActivity">
    <Section>
      <FieldActivity
        title="LĨNH VỰC HOẠT ĐỘNG"
        imgSrc={imgFieldActivity}
      />
    </Section>
  </div>
);

export default FieldActivityContainer;
