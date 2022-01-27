import React from 'react';

import mapModifiers from 'utils/functions';

export type Sizes =
  | '14x22'
  | '16x24'
  | '20x30'
  | '24x30'
  | '30x42'
  | '32x48'
  | '36x40'
  | '38x52'
  | '52x65'
  | '60x72'
  | '64x83'
  | '24x34'
  | '30x37-5'
  | '40x56';

type Variant = 'blueLinear';

export type TextStyle = (GeneralTextStyle | Sizes | Variant)[];

interface HeadingProps {
  type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
  content?: string;
  modifiers?: TextStyle;
}

const Heading: React.FC<HeadingProps> = ({
  children, type = 'h2', content, modifiers,
}) => {
  const Element = type;
  return (
    <>
      {
        content ? (
          <Element
            className={mapModifiers('a-heading', modifiers)}
            dangerouslySetInnerHTML={{ __html: content }}

          />
        ) : (
          <Element className={mapModifiers('a-heading', modifiers)}>
            {children}
          </Element>
        )
      }
    </>
  );
};

Heading.defaultProps = {
  type: 'h2',
  modifiers: undefined,
  content: undefined,
};

export default Heading;
