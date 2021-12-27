import React from 'react';

import Heading from 'components/atoms/Heading';
import Text from 'components/atoms/Text';

export interface OutStandingNumberProps {
  number: string;
  desc: string;
}

const OutStandingNumber: React.FC<OutStandingNumberProps> = ({ number, desc }) => (
  <div className="m-outStandingNumber">
    <div className="m-outStandingNumber_title">
      <Heading modifiers={['38x52', '700', 'blueLinear', 'center', 'fontNoto']}>
        {number}
        +
      </Heading>
    </div>
    <div className="m-outStandingNumber_desc">
      <Text modifiers={['16x24', '400', 'dimGray', 'center']}>{desc}</Text>
    </div>
  </div>
);

OutStandingNumber.defaultProps = {
};

export default OutStandingNumber;
