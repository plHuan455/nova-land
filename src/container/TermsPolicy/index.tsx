import React, { useMemo } from 'react';

import TermsPolicy from 'components/templates/TermsPolicy';
import HelmetContainer from 'container/helmet';
import { getBlockData } from 'utils/functions';

type Content = {
  title: string;
  description: string;
};

export type TermsPolicyBlock = Content;

const TermsPolicyContainer: React.FC<BasePageData<TermsPolicyBlock>> = ({
  seoData,
  openGraphData,
  blocks,
}) => {
  const contentBlock = useMemo(
    () => getBlockData('content', blocks) as Content,
    [blocks],
  );

  return (
    <>
      <HelmetContainer seoData={seoData} ogData={openGraphData} />
      <TermsPolicy description={contentBlock.description} title={contentBlock.title} />
    </>
  );
};

export default TermsPolicyContainer;
