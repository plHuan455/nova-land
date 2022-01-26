import React from 'react';

import Animate from 'components/organisms/Animate';
import OutStandingNumbers, { OutStandingNumbersProps } from 'components/templates/OutStandingNumbers';

interface OutStandingNumbersContainerProps extends OutStandingNumbersProps { }

const OutStandingNumbersContainer: React.FC<OutStandingNumbersContainerProps> = ({ ...props }) => (
  <Animate type="goUp">
    <div className="p-aboutUs_outStandingNumbers">
      <OutStandingNumbers
        {...props}
      />
    </div>
  </Animate>
);

export default OutStandingNumbersContainer;
