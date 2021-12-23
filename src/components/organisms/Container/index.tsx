import React from 'react';

import mapModifiers from 'utils/functions';

interface ContainerProps {
  fullScreen?: boolean;
  noPaddingRight?: boolean;
  noPaddingLeft?: boolean;
}

const Container: React.FC<ContainerProps> = ({
  fullScreen, noPaddingRight, noPaddingLeft, children,
}) => (
  <div className={`container ${mapModifiers('o-container',
    fullScreen && 'fullscreen',
    noPaddingRight && 'noPaddingRight',
    noPaddingLeft && 'noPaddingLeft')}`}
  >
    {children}

  </div>
);

Container.defaultProps = {
  fullScreen: false,
  noPaddingRight: false,
  noPaddingLeft: false,
};

export default Container;
