import React from 'react';

import MainLayout from 'container/MainLayout';
import SustainableDevelopmentContainer, {
  SustainableDevelopmentBlock,
} from 'container/SustainableDevelopment';

const SustainableDevelopment: React.FC<
  BasePageData<SustainableDevelopmentBlock>
> = (props) => (
  <MainLayout>
    <div className="p-sustainableDevelopment">
      <SustainableDevelopmentContainer {...props} />
    </div>
  </MainLayout>
);

export default SustainableDevelopment;
