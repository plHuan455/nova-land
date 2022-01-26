import React from 'react';

import imgStock from 'assets/images/imgStock.png';
import Image from 'components/atoms/Image';
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
        <Image ratio="546x308" alt="img" src={imgStock} />
      </StockInformation>
    </div>
  </Animate>
);

export default StockInformationContainer;
