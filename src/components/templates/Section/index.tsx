import React from 'react';

const Section: React.FC = ({ children }) => (
  <div className="t-section">{children}</div>
);

Section.defaultProps = {
};

export default Section;
