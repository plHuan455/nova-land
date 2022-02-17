import React from 'react';

import logo from 'assets/images/logo.png';
import Header from 'components/organisms/Header';
import useLanguage from 'hooks/useLanguage';
import { useAppSelector } from 'store/hooks';
import { BASE_URL } from 'utils/functions';

interface HeaderContainerProps {
}

const HeaderContainer: React.FC<HeaderContainerProps> = () => {
  const { groupedHeader } = useAppSelector((state) => state.menus);
  const system = useAppSelector((state) => state.system.dataSystem);
  const {
    handleChangeLang,
  } = useLanguage();
  return (
    <Header
      headerMenu={groupedHeader}
      logoSrc={`${BASE_URL}${system?.logo}` || logo}
      handleLanguage={handleChangeLang}
    />
  );
};

export default HeaderContainer;
