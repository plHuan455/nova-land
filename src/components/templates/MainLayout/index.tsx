import React from 'react';

import FooterContainer from 'container/Footer';
import HeaderContainer from 'container/Header';

interface MainLayoutProps {
}

const MainLayout: React.FC<MainLayoutProps> = ({
  children,
}) => (
  <div className="t-mainLayout">
    <HeaderContainer />
    <main className="main-layout">{children}</main>
    <FooterContainer />
  </div>
);

MainLayout.defaultProps = {
};

export default MainLayout;
