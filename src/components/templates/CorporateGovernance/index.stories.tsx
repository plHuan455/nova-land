import { Story, Meta } from '@storybook/react';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import CorporateGovernance from '.';

import dataCorporateGovernanceList from 'assets/dataDummy/corporateGovernance';

export default {
  title: 'Components/templates/CorporateGovernance',
  component: CorporateGovernance,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <Router>
    <CorporateGovernance
      dataGeneral={dataCorporateGovernanceList}
    />
  </Router>
);
