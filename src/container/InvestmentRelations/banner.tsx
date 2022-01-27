import React from 'react';

import Animate from 'components/organisms/Animate';
import Banner, { BannerProps } from 'components/organisms/Banner';

interface BannerContainerProps extends BannerProps{}

const BannerContainer: React.FC<BannerContainerProps> = ({ ...props }) => (
  <Animate type="goUp">
    <div className="p-investmentRelations_Banner">
      <Banner {...props} />
    </div>
  </Animate>
);

export default BannerContainer;
