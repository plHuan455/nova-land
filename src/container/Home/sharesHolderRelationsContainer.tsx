import React from 'react';

import shareholderRelationsList from 'assets/dataDummy/shareholderRelations';
import ShareholderRelations from 'components/templates/ShareholderRelations';

const ShareHolderRelationsContainer: React.FC = () => (
  <div className="p-home_shareholderRelations">
    <ShareholderRelations
      title="Quan hệ cổ đông"
      href="/"
      dataShareholderRelations={shareholderRelationsList}
    />
  </div>
);

export default ShareHolderRelationsContainer;
