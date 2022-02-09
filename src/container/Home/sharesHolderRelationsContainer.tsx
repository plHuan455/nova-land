import React from 'react';
import { useQuery } from 'react-query';

import shareholderCard2 from 'assets/images/ShareholderRelations/img_shareholderCard2.png';
import ShareholderRelations from 'components/templates/ShareholderRelations';
import getDocumentsService from 'services/documents';
import { DEFAULT_QUERY_OPTION } from 'utils/constants';
import { getImageURL, openInNewTab } from 'utils/functions';

export interface ShareHolderRelationsTypes {
  button: {
    url: string;
    text: string;
    target: string;
  };
  titleSection: string;
  imageFinancialReport: string;
  titleFinancialReport: string;
  titleStock: string;
}

interface ShareHolderRelationsBlock {
  blocks: ShareHolderRelationsTypes;
}

const ShareHolderRelationsContainer: React.FC<ShareHolderRelationsBlock> = ({
  blocks,
}) => {
  const { data: documentsHighlightData } = useQuery(
    'getDocuments', () => getDocumentsService({
      is_highlight: true,
    }),
    {
      ...DEFAULT_QUERY_OPTION,
    },
  );

  const shareholderRelationsData = {
    imgSrc: shareholderCard2,
    title: documentsHighlightData?.data[0].name || '',
    content: documentsHighlightData?.data[0].name,
    handleClick: () => { openInNewTab(getImageURL(documentsHighlightData?.data[0].file)); },
  };

  return (
    <div className="p-home_shareholderRelations">
      <ShareholderRelations
        title={blocks.titleSection}
        href={blocks.button.url}
        target={blocks.button.target}
        namebtn={blocks.button.text}
        dataShareholderRelations={shareholderRelationsData}
        imageFinancialReport={getImageURL(blocks.imageFinancialReport)}
        titleFinancialReport={blocks.titleFinancialReport}
        titleStock={blocks.titleStock}
      />
    </div>
  );
};

export default ShareHolderRelationsContainer;
