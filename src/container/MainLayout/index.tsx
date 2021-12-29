import React from 'react';

import MainLayout from 'components/templates/MainLayout';

interface MainLayoutContainerProps {
}

const MainLayoutContainer: React.FC<MainLayoutContainerProps> = ({
  children,
}) => (
  <MainLayout>
    {children}
  </MainLayout>
);

export default MainLayoutContainer;
