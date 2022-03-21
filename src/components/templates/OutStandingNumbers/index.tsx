import React from 'react';

import Heading from 'components/atoms/Heading';
import Text from 'components/atoms/Text';
import Container from 'components/organisms/Container';
import Section from 'components/templates/Section';

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
    <Heading modifiers={['52x65', '600', 'blueLinear', 'center', 'fontCalibri']}>
      {number}
    </Heading>
    <div className="u-mt-sm-8 u-mt-md-16">
      <Text modifiers={['16x20', '300', 'dimGray', 'center', 'uppercase', 'fontCalibri']}>{desc}</Text>
    </div>
  </div>
);

const OutStandingNumbers: React.FC<OutStandingNumbersProps> = ({
  title,
  dataList,
}) => (
  <div className="t-outStandingNumbers">
    <Section>
      <Container>
        <div className="t-outStandingNumbers_heading">
          <Heading modifiers={['center', '700', '30x42', 'fontCalibri', 'jet']}>
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
    </Section>
  </div>
);

OutStandingNumbers.defaultProps = {};

export default OutStandingNumbers;
