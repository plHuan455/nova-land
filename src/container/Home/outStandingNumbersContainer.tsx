import React, { useMemo } from 'react';

import Animate from 'components/organisms/Animate';
import OutStandingNumbers from 'components/templates/OutStandingNumbers';

interface ItemsList {
  textNumber: string,
  descriptionNumber: string;
}

export interface OutStandingNumbersTypes {
  items: ItemsList[],
  titleSection: string;
}

interface OutStandingNumbersBlock {
  blocks: OutStandingNumbersTypes;
}

const OutStandingNumbersContainer: React.FC<OutStandingNumbersBlock> = ({
  blocks,
}) => {
  const convertData = useMemo(() => {
    if (blocks.items) {
      return blocks.items.map((item) => ({
        number: item.textNumber,
        desc: item.descriptionNumber,
      }));
    }
    return [];
  }, [blocks]);

  return (
    <Animate type="goUp">
      <div className="p-home_outStandingNumbers">
        <OutStandingNumbers
          title={blocks.titleSection}
          dataList={convertData}
        />
      </div>
    </Animate>
  );
};

export default OutStandingNumbersContainer;
