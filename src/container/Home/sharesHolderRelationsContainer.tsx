import React from 'react';

import shareholderRelationsList from 'assets/dataDummy/shareholderRelations';
import ShareholderRelations from 'components/templates/ShareholderRelations';

export interface ShareHolderRelationsTypes {
  button: {
    url: string;
    text: string;
    target: string;
  };
  titleSection: string;
}

interface ShareHolderRelationsBlock {
  blocks: ShareHolderRelationsTypes;
}

const ShareHolderRelationsContainer: React.FC<ShareHolderRelationsBlock> = ({
  blocks,
}) => (
  <div className="p-home_shareholderRelations">
    <ShareholderRelations
      title={blocks.titleSection}
      href={blocks.button.url}
      target={blocks.button.target}
      namebtn={blocks.button.text}
      dataShareholderRelations={shareholderRelationsList}
    />
  </div>
);

export default ShareHolderRelationsContainer;
