/* eslint-disable react/no-danger */
import React from 'react';

import Heading from 'components/atoms/Heading';
import Icon from 'components/atoms/Icon';
import mapModifiers from 'utils/functions';

interface CollapsesProps {
  title: string;
  content?: string;
  active: boolean;
  handleClickTab?:()=>void;
}

const Collapses: React.FC<CollapsesProps> = ({
  title,
  children,
  content,
  active,
  handleClickTab,
}) => (
  <div className={mapModifiers('o-collapses', active && 'active')}>
    <div
      className="o-collapses_wrapTitle"
      onClick={() => {
        if (handleClickTab) handleClickTab();
      }}
    >
      <Heading modifiers={['20x30', '500', 'arsenic', 'fontNoto']}>{title}</Heading>
      <div className="o-collapses_icon">
        <Icon
          size="24"
          iconName="blackArrowDown"
        />
      </div>
    </div>
    <div
      className={mapModifiers('o-collapses_wrapper', active && 'active')}
    >
      {content ? (
        <div className="o-collapses_description" dangerouslySetInnerHTML={{ __html: content }} />
      ) : (
        <div className="o-collapses_description">
          {children}
        </div>
      )}

    </div>
  </div>
);

Collapses.defaultProps = {
  content: '',
  handleClickTab: undefined,
};

export default Collapses;
