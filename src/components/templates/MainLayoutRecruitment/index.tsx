import React from 'react';

import FooterRecruitmentContainer from 'container/FooterRecruitment';
import HeaderRecruitmentContainer from 'container/HeaderRecruitment';

interface MainLayoutRecruitmentProps {
}

const MainLayoutRecruitment: React.FC<MainLayoutRecruitmentProps> = ({ children }) => (
  <div className="t-mainLayoutRecruitment">
    <HeaderRecruitmentContainer />
    <div className="u-pt-lg-93 u-pt-80">
      <main className="main-layoutRecruitment">{children}</main>
    </div>
    <FooterRecruitmentContainer />
  </div>
);

export default MainLayoutRecruitment;
