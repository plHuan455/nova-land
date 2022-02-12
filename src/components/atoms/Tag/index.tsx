/* eslint-disable react/require-default-props */
import React from 'react';

import Text from 'components/atoms/Text';

interface TagProps {
  onClickTag?: (value: string) => void;
  text?: string;
}

const Tag: React.FC<TagProps> = ({ onClickTag, text }) => (
  <div className="a-tag" onClick={() => onClickTag && onClickTag(text || '')}>
    <Text modifiers={['12x17', '300', 'jet']}>{text}</Text>
  </div>
);

Tag.defaultProps = {
};

export default Tag;
