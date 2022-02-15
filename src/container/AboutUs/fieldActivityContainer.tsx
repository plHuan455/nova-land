import React from 'react';

import FieldActivity, { FieldActivityProps } from 'components/templates/FieldActivity';
import Section from 'components/templates/Section';

interface FieldActivityContainerProps extends FieldActivityProps { }

const FieldActivityContainer: React.FC<FieldActivityContainerProps> = ({ ...props }) => (
  <div className="p-aboutUs_fieldActivity">
    <Section modifiers="noPb">
      <FieldActivity
        {...props}
      />
    </Section>
  </div>
);

export default FieldActivityContainer;
