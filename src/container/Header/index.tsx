import React from 'react';

import logo from 'assets/images/logo.png';
import Header from 'components/organisms/Header';
import { useAppSelector } from 'store/hooks';
import { BASE_URL } from 'utils/functions';

interface HeaderContainerProps {
}

const HeaderContainer: React.FC<HeaderContainerProps> = () => {
  const menuList = useAppSelector((state) => state.menus.header);
  const system = useAppSelector((state) => state.system.dataSystem);

  return (
    <Header
      headerMenu={menuList}
      logoSrc={`${BASE_URL}${system?.logo}` || logo}
    />
  );
};

export default HeaderContainer;
