import React from 'react';

import Animate from 'components/organisms/Animate';
import OtherDocuments, { OtherDocumentsProps } from 'components/templates/OtherDocuments';

interface OtherDocumentContainerProps extends OtherDocumentsProps{}

const OtherDocumentContainer: React.FC<OtherDocumentContainerProps> = ({ ...props }) => (
  <Animate type="goUp">
    <div className="p-investmentRelations_otherDocument">
      <OtherDocuments
        {...props}
      />
    </div>
  </Animate>
);

export default OtherDocumentContainer;
