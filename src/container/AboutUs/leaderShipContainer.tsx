import React from 'react';

import dataLeadershipList from 'assets/dataDummy/leadership';
import Leadership from 'components/templates/Leadership';

const LeaderShipContainer: React.FC = () => (
  <div className="p-aboutUs-leadership pt-100">
    <Leadership
      title="BAN LÃNH ĐẠO"
      tabDataLeadership={dataLeadershipList}
    />
  </div>
);

export default LeaderShipContainer;
