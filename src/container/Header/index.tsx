import React from 'react';

import headerMenuDummy from 'assets/dataDummy/header';
import Header from 'components/organisms/Header';

interface HeaderContainerProps {
}

const HeaderContainer: React.FC<HeaderContainerProps> = () => (
  <Header headerMenu={headerMenuDummy} />
);

export default HeaderContainer;
