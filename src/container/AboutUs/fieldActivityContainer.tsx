import React from 'react';

import imgFieldActivity from 'assets/images/img_field_activity.png';
import FieldActivity from 'components/templates/FieldActivity';

const FieldActivityContainer: React.FC = () => (
  <div className="p-aboutUs_fieldActivity pt-100">
    <FieldActivity
      title="LĨNH VỰC HOẠT ĐỘNG"
      imgSrc={imgFieldActivity}
    />
  </div>
);

export default FieldActivityContainer;
