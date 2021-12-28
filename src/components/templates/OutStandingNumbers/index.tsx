import React from 'react';

import Heading from 'components/atoms/Heading';
import Container from 'components/organisms/Container';
import OutStandingNumber, {
  OutStandingNumberProps,
} from 'components/templates/OutStandingNumbers/NumberBlock';

interface OutStandingNumbersProps {
  title: string;
  dataList: OutStandingNumberProps[];
}

const OutStandingNumbers: React.FC<OutStandingNumbersProps> = ({
  title,
  dataList,
}) => (
  <div className="t-outStandingNumbers">
    <Container>
      <Heading modifiers={['center', '700', '38x52', 'fontNoto', 'jet']}>
        {title}
      </Heading>
      <div className="t-outStandingNumbers_list">
        {dataList?.map((item, idx) => (
          <>
            <div
              key={`number-item-${idx.toString()}`}
              className={`t-outStandingNumbers_list-item t-outStandingNumbers_list-item-${idx + 1}`}
            >
              <OutStandingNumber number={item.number} desc={item.desc} />
            </div>
            {idx !== dataList.length - 1 && (
              <span
                className={`t-outStandingNumbers_list-line t-outStandingNumbers_list-line-${idx + 1}`}
              />
            )}
          </>
        ))}
      </div>
    </Container>
  </div>
);

OutStandingNumbers.defaultProps = {};

export default OutStandingNumbers;
