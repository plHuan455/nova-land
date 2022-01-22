import React from 'react';

import FooterRecruitmentContainer from 'container/FooterRecruitment';
import HeaderContainer from 'container/Header';

interface MainLayoutRecruitmentProps {
}

const MainLayoutRecruitment: React.FC<MainLayoutRecruitmentProps> = ({ children }) => (
  <div className="t-mainLayoutRecruitment">
    <HeaderContainer />
    <main className="main-layout">{children}</main>
    <FooterRecruitmentContainer />
  </div>
);

export default MainLayoutRecruitment;
