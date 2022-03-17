import React from 'react';

import Heading from 'components/atoms/Heading';
import Container from 'components/organisms/Container';

export interface StockInformationType {
  desc: string,
  movementNumber: number;
  movementPercent: number;
}

export interface StockInformationProps {
  title?: string,
}

const StockInformation: React.FC<StockInformationProps> = ({
  title,
  children,
}) => (
  <div className="t-stockInformation">
    <div className="t-stockInformation_heading">
      <Heading modifiers={['30x42', 'center', '700', 'jet', 'fontCalibri']} content={title} />
    </div>
    <Container>
      <div className="t-stockInformation_content">
        <div className="t-stockInformation_rightContent">
          {children}
        </div>
      </div>
    </Container>
  </div>
);

export default StockInformation;
