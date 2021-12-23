import React from 'react';

interface IconProps {
}

const Icon: React.FC<IconProps> = ({ children }) => (
  <div className="a-icon">{children}</div>
);

Icon.defaultProps = {
};

export default Icon;
