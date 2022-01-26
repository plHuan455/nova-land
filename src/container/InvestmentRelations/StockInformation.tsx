import React from 'react';

import Animate from 'components/organisms/Animate';
import StockInformation,
{ StockInformationProps }
  from 'components/templates/StockInformation';

interface StockInformationContainerProps extends StockInformationProps { }

const StockInformationContainer: React.FC<StockInformationContainerProps> = ({
  children, ...props
}) => (
  <Animate type="goUp">
    <div className="p-investmentRelations_stockInformation">
      <StockInformation
        {...props}
      >
        {children}
      </StockInformation>
    </div>
  </Animate>
);

export default StockInformationContainer;
