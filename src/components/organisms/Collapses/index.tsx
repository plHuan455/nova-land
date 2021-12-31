/* eslint-disable react/no-danger */
import React, { useRef } from 'react';

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
}) => {
  const collapseItemRef = useRef<HTMLDivElement>(null);
  return (
    <div className={mapModifiers('o-collapses', active && 'active')}>
      <div
        className="o-collapses_wrapTitle"
        onClick={() => {
          if (handleClickTab) handleClickTab();
        }}
      >
        <Heading modifiers={['20x30', '400', 'arsenic', 'fontNoto']}>{title}</Heading>
        <div className="o-collapses_icon">
          <Icon
            size="24"
            iconName="arrowDownGrey"
          />
        </div>
      </div>
      <div
        style={{
          maxHeight: active ? collapseItemRef?.current?.clientHeight : 0,
        }}
        className="o-collapses_wrapper"
      >
        {content ? (
          <div ref={collapseItemRef} className="o-collapses_description" dangerouslySetInnerHTML={{ __html: content }} />
        ) : (
          <div ref={collapseItemRef} className="o-collapses_description">
            {children}
          </div>
        )}

      </div>
    </div>
  );
};

Collapses.defaultProps = {
  content: '',
  handleClickTab: undefined,
};

export default Collapses;
