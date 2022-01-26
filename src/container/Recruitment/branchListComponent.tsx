import React from 'react';

import BranchListData from 'assets/dataDummy/BranchList';
import BranchList from 'components/organisms/BranchList';

const BranchListContainer: React.FC = () => (
  <div className="p-recruitment_branchListContainer">
    <BranchList
      data={BranchListData}
    />
  </div>
);

export default BranchListContainer;
