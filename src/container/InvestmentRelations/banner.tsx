import React from 'react';

import Animate from 'components/organisms/Animate';
import HeroBanner, { HeroBannerProps } from 'components/templates/HeroBanner';

interface HeroBannerContainerProps extends HeroBannerProps { }

const BannerContainer: React.FC<HeroBannerContainerProps> = ({ ...rest }) => (
  <Animate type="goUp">
    <div className="p-investmentRelations_Banner">
      <HeroBanner
        {...rest}
      />
    </div>
  </Animate>
);

export default BannerContainer;
