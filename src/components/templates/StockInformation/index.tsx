import React from 'react';

import Heading from 'components/atoms/Heading';
import Text from 'components/atoms/Text';
import Container from 'components/organisms/Container';

export interface StockInformationType {
  desc: string,
  movementNumber: number;
  movementPercent: number;
}

interface StockInformationProps {
  title?: string,
  data?: StockInformationType[],
  note?: string,
}

const StockInformation: React.FC<StockInformationProps> = ({
  title,
  children,
  data,
  note,
}) => (
  <div className="t-stockInformation">
    <div className="t-stockInformation_heading">
      <Heading modifiers={['30x42', 'center', '600', 'jet']} content={title} />
    </div>
    <Container>
      <div className="t-stockInformation_content">
        <div>
          <div className="t-stockInformation_leftContent">
            {
              data && data.map((item, idx) => (
                <div key={idx.toString()} className="t-stockInformation_item">
                  <div className="t-stockInformation_desc">
                    <Text modifiers={['14x22', 'fontLexend', '400', 'dimGray']} content={item.desc} />
                  </div>
                  <div className="t-stockInformation_number">
                    <Heading
                      modifiers={['jet', '24x30', '600', 'fontLexend']}
                    >
                      {`${item.movementNumber.toLocaleString()} (${item.movementPercent.toLocaleString()}%)`}
                    </Heading>
                  </div>
                </div>
              ))
            }
          </div>
          <div className="t-stockInformation_note">
            <Text modifiers={['12x17', 'fontLexend', '400', 'dimGray']} content={note} />
          </div>
        </div>
        <div className="t-stockInformation_rightContent">
          {children}
        </div>
      </div>
    </Container>
  </div>
);

StockInformation.defaultProps = {
  title: undefined,
  data: undefined,
  note: undefined,
};

export default StockInformation;
