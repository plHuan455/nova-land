import React from 'react';

import { headerRecruitmentMenuDummy } from 'assets/dataDummy/header';
import Header from 'components/organisms/Header';

const HeaderRecruitmentContainer: React.FC = () => (
  <Header headerMenu={headerRecruitmentMenuDummy} />
);

export default HeaderRecruitmentContainer;
