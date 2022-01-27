import React, { useLayoutEffect, useRef } from 'react';

import mapModifiers, { handleScrollCenter } from 'utils/functions';

interface TabPanelProps {
  active?: boolean;
}

interface TabProps {
  label?: string;
  active?: boolean;
  size?: '16x24' | '20x28';
  acitveColor?: 'goldenBrown';
  handleClick?: () => void;
}

interface TabsProps {
  variableMutate?: number | string;
  classTabsActive?: string;
  variant?: 'white'
}

export const TabPanel: React.FC<TabPanelProps> = ({ active, children }) => (
  <div className={mapModifiers('o-tabs_panel', active && 'active')}>{children}</div>
);

export const Tab: React.FC<TabProps> = ({
  active, label, size, acitveColor, handleClick,
}) => (
  <div onClick={handleClick} className={mapModifiers('o-tabs_tab', active && 'active', acitveColor)}>
    <span className={`o-tabs_label ${size ? `o-tabs_label-${size}` : ''} ${acitveColor ? `o-tabs_label-${acitveColor}` : ''}`}>{label}</span>
  </div>
);

export const Tabs: React.FC<TabsProps> = ({
  children, variableMutate, classTabsActive, variant,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    handleScrollCenter(ref, classTabsActive || '.o-tabs_tab-active');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [variableMutate]);

  return (
    <div className={mapModifiers('o-tabs', variant)}>
      <div ref={ref} className="o-tabs_labels">
        {children}
      </div>
    </div>
  );
};

TabPanel.defaultProps = {
  active: false,
};

Tab.defaultProps = {
  label: '',
  active: false,
  size: undefined,
  acitveColor: undefined,
  handleClick: undefined,
};

Tabs.defaultProps = {
  variableMutate: undefined,
  classTabsActive: '',
  variant: undefined,
};

export default React.memo(Tabs);
