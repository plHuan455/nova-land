import React from 'react';

import mapModifiers from 'utils/functions';

export type Sizes =
  | '24x32'
  | '20x28'
  | '16x24'
  | '16x20'
  | '14x22'
  | '14x20'
  | '14x18'
  | '12x17'
  | '18x22'
  | '18x28';

export type LetterSpacing =
  | 'ls-005'

export type TextStyle = (GeneralTextStyle | Sizes | LetterSpacing | 'opacity07')[];

interface TextProps {
  modifiers?: TextStyle;
  type?: 'p' | 'span' | 'div';
  content?: string;
  isInline?: boolean;
}

const Text: React.FC<TextProps> = ({
  modifiers,
  type = 'p',
  content,
  children,
  isInline,
}) => {
  const Element = type;
  return (
    <>
      {content ? (
        <Element
          className={mapModifiers('a-text', modifiers, isInline && 'inline')}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      ) : (
        <Element className={mapModifiers('a-text', modifiers, isInline && 'inline')}>
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
  isInline: undefined,
};

export default Text;
