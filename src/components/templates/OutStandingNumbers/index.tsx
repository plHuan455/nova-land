import React from 'react';

import Heading from 'components/atoms/Heading';
import Text from 'components/atoms/Text';
import Container from 'components/organisms/Container';

export interface OutStandingNumbersProps {
  title: string;
  dataList: NumberBlockProps[];
}

export interface NumberBlockProps {
  number: string;
  desc: string;
}

const NumberBlock: React.FC<NumberBlockProps> = ({ number, desc }) => (
  <div>
    <Heading modifiers={['52x65', '600', 'blueLinear', 'center', 'fontNoto']}>
      {number}
      +
    </Heading>
    <div className="u-mt-sm-8 u-mt-md-16">
      <Text modifiers={['16x20', '300', 'dimGray', 'center', 'uppercase']}>{desc}</Text>
    </div>
  </div>
);

const OutStandingNumbers: React.FC<OutStandingNumbersProps> = ({
  title,
  dataList,
}) => (
  <div className="t-outStandingNumbers">
    <Container>
      <div className="t-outStandingNumbers_heading">
        <Heading modifiers={['center', '500', '30x42', 'fontNoto', 'jet']}>
          {title}
        </Heading>
      </div>
      <div className="t-outStandingNumbers_list">
        {dataList?.map((item, idx) => (
          <React.Fragment key={`number-item-${idx.toString()}`}>
            <div className={`t-outStandingNumbers_list-item t-outStandingNumbers_list-item-${idx + 1}`}>
              <NumberBlock {...item} />
            </div>
            {idx !== dataList.length - 1 && (
              <span
                className={`t-outStandingNumbers_list-line t-outStandingNumbers_list-line-${idx + 1}`}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </Container>
  </div>
);

OutStandingNumbers.defaultProps = {};

export default OutStandingNumbers;
