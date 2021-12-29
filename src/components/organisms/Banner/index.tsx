import React from 'react';

import Image from 'components/atoms/Image';

interface BannerProps {
  src: string;
  srcTablet?: string;
  srcMobile?: string;
}

const Banner: React.FC<BannerProps> = (props) => (
  <div className="o-banner">
    <Image ratio="1366x600" {...props} alt="image-banner" />
  </div>
);

Banner.defaultProps = {
  srcTablet: undefined,
  srcMobile: undefined,
};

export default Banner;
