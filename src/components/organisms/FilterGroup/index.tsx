import React from 'react';

interface FilterGroupProps {
}

const FilterGroup: React.FC<FilterGroupProps> = ({ children }) => (
  <div>{children}</div>
);

FilterGroup.defaultProps = {
};

export default FilterGroup;
