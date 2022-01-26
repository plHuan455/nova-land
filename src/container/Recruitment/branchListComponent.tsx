import React from 'react';

import BranchListData from 'assets/dataDummy/BranchList';
import BranchList from 'components/organisms/BranchList';
import Container from 'components/organisms/Container';
import Section from 'components/templates/Section';

const BranchListContainer: React.FC = () => (
  <div className="p-recruitment_branchListContainer">
    <Section>
      <Container>
        <BranchList
          data={BranchListData}
        />
      </Container>
    </Section>
  </div>
);

export default BranchListContainer;
