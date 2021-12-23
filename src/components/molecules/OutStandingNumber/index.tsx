import React from 'react';

import Text from 'components/atoms/Text';

export interface OutStandingNumberProps {
  number: string;
  desc: string;
}

const OutStandingNumber: React.FC<OutStandingNumberProps> = ({ number, desc }) => (
  <div className="m-outStandingNumber">
    <Text modifiers={['16x24', '400', 'dimGray', 'center']}>
      {number}
      +
    </Text>
    <div className="m-outStandingNumber_desc">
      <Text modifiers={['16x24', '400', 'dimGray', 'center']}>{desc}</Text>
    </div>
  </div>
);

OutStandingNumber.defaultProps = {
};

export default OutStandingNumber;
