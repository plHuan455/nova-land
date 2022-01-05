import { Story, Meta } from '@storybook/react';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import ShareholderRelations, { ShareholderCard } from '.';

import shareholderRelationsList from 'assets/dataDummy/shareholderRelations';
import shareholderCard1 from 'assets/images/ShareholderRelations/img_shareholderCard1.png';
import shareholderCard2 from 'assets/images/ShareholderRelations/img_shareholderCard2.png';

export default {
  title: 'Components/templates/ShareholderRelations',
  component: ShareholderRelations,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <Router>
    <ShareholderRelations
      title="Quan hệ cổ đông"
      href="/"
      dataShareholderRelations={shareholderRelationsList}
    />
  </Router>
);

export const shareholderCard: Story = () => (
  <div style={{ maxWidth: '547px', margin: '30px' }}>
    <Router>
      <ShareholderCard
        imgSrc={shareholderCard1}
        isStocks
        title="Cổ Phiếu"
      />
    </Router>
  </div>
);

export const shareholderCardSecond: Story = () => (
  <div style={{ maxWidth: '547px', margin: '30px' }}>
    <Router>
      <ShareholderCard
        imgSrc={shareholderCard2}
        title="Báo Cáo Tài Chính"
        content="Báo cáo tài chính Quý 3"
      />
    </Router>
  </div>
);
