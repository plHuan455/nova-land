import React from 'react';

import logo from 'assets/images/logo.png';
import Header from 'components/organisms/Header';
import { useAppSelector } from 'store/hooks';

interface HeaderContainerProps {
}

const HeaderContainer: React.FC<HeaderContainerProps> = () => {
  const menuList = useAppSelector((state) => state.menus.header);

  return (
    <Header
      headerMenu={menuList}
      logoSrc={logo}
    />
  );
};

export default HeaderContainer;
