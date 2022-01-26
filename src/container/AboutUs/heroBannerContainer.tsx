import React from 'react';

import HeroBanner, { HeroBannerProps } from 'components/templates/HeroBanner';

interface HeroBannerContainerProps extends HeroBannerProps { }

const HeroBannerContainer: React.FC<HeroBannerContainerProps> = ({ ...rest }) => (
  <div className="p-aboutUs_heroBanner">
    <HeroBanner
      {...rest}
    />
  </div>
);

export default HeroBannerContainer;
