/* eslint-disable react/require-default-props */
import React from 'react';

import mapModifiers from 'utils/functions';

interface LoadingProps {
  isShow?: boolean;
  variant?: 'fullScreen' | 'default';
}

const Loading: React.FC<LoadingProps> = ({
  isShow,
  variant,
}) => {
  if (!isShow) return null;
  return (
    <div className={mapModifiers('a-loader-circle', variant)}>
      <div className="loader-fading-circle">
        <div className="loader-circle1 loader-circle" />
        <div className="loader-circle2 loader-circle" />
        <div className="loader-circle3 loader-circle" />
        <div className="loader-circle4 loader-circle" />
        <div className="loader-circle5 loader-circle" />
        <div className="loader-circle6 loader-circle" />
        <div className="loader-circle7 loader-circle" />
        <div className="loader-circle8 loader-circle" />
        <div className="loader-circle9 loader-circle" />
        <div className="loader-circle10 loader-circle" />
        <div className="loader-circle11 loader-circle" />
        <div className="loader-circle12 loader-circle" />
      </div>
    </div>
  );
};

Loading.defaultProps = {
};

export default Loading;
