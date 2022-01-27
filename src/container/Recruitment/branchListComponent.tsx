import React from 'react';

import BranchListData from 'assets/dataDummy/BranchList';
import BranchList from 'components/organisms/BranchList';
import Container from 'components/organisms/Container';

const BranchListContainer: React.FC = () => (
  <div className="p-recruitment_branchListContainer">
    <Container>
      <BranchList
        data={BranchListData}
      />
    </Container>
  </div>
);

export default BranchListContainer;
