import React from 'react';

import Text from 'components/atoms/Text';
import OutStandingNumber, { OutStandingNumberProps } from 'components/molecules/OutStandingNumber';
import Container from 'components/organisms/Container';

interface OutStandingNumbersProps {
  title: string;
  dataList: OutStandingNumberProps[];
}

const OutStandingNumbers: React.FC<OutStandingNumbersProps> = ({ title, dataList }) => (
  <div className="t-outStandingNumbers">
    <Container>
      <Text modifiers={['center', '700', '16x24']}>
        {title}
      </Text>
      {dataList.length > 0 && (
        <div className="t-outStandingNumbers_list">
          {dataList.map((item, idx) => (
            <>
              <div key={`number-item-${idx.toString()}`} className="t-outStandingNumbers_list-item">
                <OutStandingNumber number={item.number} desc={item.desc} />
              </div>
              {idx !== dataList.length - 1 && <span className="t-outStandingNumbers_list-line" />}
            </>
          ))}
        </div>
      )}
    </Container>
  </div>
);

OutStandingNumbers.defaultProps = {
};

export default OutStandingNumbers;
