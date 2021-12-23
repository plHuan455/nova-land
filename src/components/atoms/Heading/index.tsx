import React from 'react';

interface HeadingProps {
}

const Heading: React.FC<HeadingProps> = ({ children }) => (
  <div>{children}</div>
);

Heading.defaultProps = {
};

export default Heading;
