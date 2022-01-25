import React from 'react';

import MainLayoutRecruitment from 'components/templates/MainLayoutRecruitment';

const MainLayoutRecruitmentContainer: React.FC = ({
  children,
}) => (
  <MainLayoutRecruitment>
    {children}
  </MainLayoutRecruitment>
);

export default MainLayoutRecruitmentContainer;
