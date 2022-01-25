import React from 'react';

import { headerRecruitmentMenuDummy } from 'assets/dataDummy/header';
import logo from 'assets/images/logo.png';
import Header from 'components/organisms/Header';

const HeaderRecruitmentContainer: React.FC = () => (
  <Header
    headerMenu={headerRecruitmentMenuDummy}
    logoSrc={logo}
  />
);

export default HeaderRecruitmentContainer;
