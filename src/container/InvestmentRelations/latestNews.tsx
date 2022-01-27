import React from 'react';

import Animate from 'components/organisms/Animate';
import LatestNews, { LatestNewsProps } from 'components/templates/LatestNews';

interface LatestNewsContainerProps extends LatestNewsProps{}

const LatestNewsContainer: React.FC<LatestNewsContainerProps> = ({ ...props }) => (
  <Animate type="goUp">
    <div className="p-investmentRelations_latestNews">
      <LatestNews
        {...props}
      />
    </div>
  </Animate>
);

export default LatestNewsContainer;
