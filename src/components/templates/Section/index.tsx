import React from 'react';

import mapModifiers from 'utils/functions';

interface SectionProps {
  modifiers?: 'noPb' | 'noPt'
}

const Section: React.FC<SectionProps> = ({ modifiers, children }) => (
  <div className={mapModifiers('t-section', modifiers)}>{children}</div>
);

Section.defaultProps = {
  modifiers: undefined,
};

export default Section;
