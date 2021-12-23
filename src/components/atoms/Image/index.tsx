import React, { useMemo } from 'react';

import useDeviceQueries from 'hooks/useDeviceQueries';
import mapModifiers from 'utils/functions';

interface ImageProps {
  src: string;
  srcTablet?: string;
  srcMobile?: string;
  alt?: string;
  ratio: Ratio;
}

const Image: React.FC<ImageProps> = ({
  src, srcMobile, srcTablet, alt, ratio,
}) => {
  const { isMobile, isTablet } = useDeviceQueries();
  const sourceImage = useMemo(() => {
    if (isMobile) {
      return srcMobile || src;
    }
    if (isTablet) {
      return srcTablet || src;
    }
    return src;
  }, [isMobile, isTablet, src, srcMobile, srcTablet]);
  return (
    <div className={mapModifiers('a-image', ratio)}>
      <img src={sourceImage} alt={alt} loading="lazy" />
    </div>
  );
};

Image.defaultProps = {
  alt: 'replacing',
  srcMobile: undefined,
  srcTablet: undefined,
};

export default Image;
