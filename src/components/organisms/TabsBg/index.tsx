import React, { useLayoutEffect, useRef } from 'react';

import Image from 'components/atoms/Image';
import Text from 'components/atoms/Text';
import mapModifiers, { handleScrollCenter } from 'utils/functions';

interface TabPanelProps {
  active?: boolean;
}

interface TabProps {
  label?: string;
  active?: boolean;
  size?: '16x24' | '20x28';
  imgActive?: string;
  imgInActive?: string;
  handleClick?: () => void;
}

interface TabsProps {
  variableMutate?: number | string;
  classTabsActive?: string;
  variant?: 'white';
  option?: 'background'; // Add more option
}

export const TabBgPanel: React.FC<TabPanelProps> = ({ active, children }) => (
  <div className={mapModifiers('o-tabsBg_panel', active && 'active')}>{children}</div>
);

export const TabBg: React.FC<TabProps> = ({
  active, label, size, imgActive, imgInActive, handleClick,
}) => (
  <div onClick={handleClick} className={mapModifiers('o-tabsBg_tab', active && 'active')}>
    <span className={`o-tabsBg_label ${size ? `o-tabsBg_label-${size}` : ''}`}>
      <div className="o-tabsBg_image">
        <Image ratio="1x1" src={(active ? imgActive : imgInActive) || ''} />
      </div>
      <Text modifiers={['18x28', '500', 'jet', 'fontNoto', 'uppercase']}>{label}</Text>
    </span>
  </div>
);

export const TabsBg: React.FC<TabsProps> = ({
  children, variableMutate, classTabsActive, variant, option,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    handleScrollCenter(ref, classTabsActive || '.o-tabsBg_tab-active');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [variableMutate]);

  return (
    <div className={mapModifiers('o-tabsBg', variant, option)}>
      <div ref={ref} className="o-tabsBg_labels">
        {children}
      </div>
    </div>
  );
};

TabBgPanel.defaultProps = {
  active: false,
};

TabBg.defaultProps = {
  label: '',
  active: false,
  size: undefined,
  imgActive: undefined,
  imgInActive: undefined,
  handleClick: undefined,
};

TabsBg.defaultProps = {
  variableMutate: undefined,
  classTabsActive: '',
  variant: undefined,
  option: undefined,
};

export default React.memo(TabsBg);
