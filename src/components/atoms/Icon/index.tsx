import React from 'react';

import mapModifiers from 'utils/functions';

export const iconList = {
  facebook: 'facebook',
  youtube: 'youtube',
  zalo: 'zalo',
  arrowDownBlack: 'arrowDownBlack',
  arrowDownGrey: 'arrowDownGrey',
  arrowNextRed: 'arrowNextRed',
  arrowNextGrey: 'arrowNextGrey',
  eyeOpen: 'eyeOpen',
  arrowNextWhite: 'arrowNextWhite',
  search: 'search',
  arrowNextWhite2: 'arrowNextWhite2',
  arrowDownBrown: 'arrowDownBrown',
  arrowNextYellowBrown: 'arrowNextYellowBrown',
  arrowNextGray: 'arrowNextGray',
  home: 'home',
};

export type IconName = keyof typeof iconList;

export type IconSize = '14' | '24' |'40' | '10' | '16' | '20' | '18';

interface IconProps {
  iconName: IconName;
  size?: IconSize;
}
const Icon: React.FC<IconProps> = ({ iconName, size }) => (
  <i className={mapModifiers('a-icon', iconName, size)} />);

Icon.defaultProps = {
  size: '24',
};

export default Icon;
