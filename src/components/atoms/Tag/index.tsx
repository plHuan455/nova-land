import React from 'react';

import Text from 'components/atoms/Text';

const Tag: React.FC = ({ children }) => (
  <div className="a-tag">
    <Text modifiers={['12x17', '300', 'jet']}>{children}</Text>
  </div>
);

Tag.defaultProps = {
};

export default Tag;
