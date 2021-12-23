import React from 'react';

import mapModifiers from 'utils/functions';

export type Sizes =
  | '16x24'

export type TextStyle = (GeneralTextStyle | Sizes)[];

interface TextProps {
  modifiers?: TextStyle;
  type?: 'p' | 'span' | 'div';
  content?: string;
}

const Text: React.FC<TextProps> = ({
  modifiers,
  type = 'p',
  content,
  children,
}) => {
  const Element = type;
  return (
    <>
      {content ? (
        <Element
          className={mapModifiers('a-text', modifiers)}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      ) : (
        <Element className={mapModifiers('a-text', modifiers)}>
          {children}
        </Element>
      )}
    </>
  );
};

Text.defaultProps = {
  modifiers: undefined,
  type: 'p',
  content: undefined,
};

export default Text;
