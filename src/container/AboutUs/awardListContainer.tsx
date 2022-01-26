import React from 'react';

import AwardList, { AwardListProps } from 'components/templates/AwardList';

interface AwardListContainerProps extends AwardListProps{}

const AwardListContainer: React.FC<AwardListContainerProps> = ({ ...props }) => (
  <div className="p-aboutUs_awardList pt-100 pb-100">
    <AwardList
      {...props}
    />
  </div>
);

export default AwardListContainer;
