import React from 'react';

import dataLeadershipList from 'assets/dataDummy/leadership';
import Leadership from 'components/templates/Leadership';

const LeadershipContainer: React.FC = () => (
  <div className="p-aboutUs_leadership">
    <Leadership
      title="BAN LÃNH ĐẠO"
      tabDataLeadership={dataLeadershipList}
    />
  </div>
);

export default LeadershipContainer;
