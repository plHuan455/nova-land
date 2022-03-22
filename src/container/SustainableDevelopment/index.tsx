import React, { useMemo } from 'react';

import { headerSustainableDevelopmentMenuDummy } from 'assets/dataDummy/header';
import SustainableDevelopmentMenu from 'components/organisms/SustainableDevelopmentMenu';
import TermsPolicy from 'components/templates/TermsPolicy';
import HelmetContainer from 'container/helmet';
import { getBlockData } from 'utils/functions';

type Content = {
  title: string;
  description: string;
  isPageSustainableDevelopment: boolean;
};

export type SustainableDevelopmentBlock = Content;

const SustainableDevelopmentContainer: React.FC<BasePageData<SustainableDevelopmentBlock>> = ({
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
      <section className="pt-sustainableDevelopmentMenu pt-header">
        <SustainableDevelopmentMenu headerDataMenus={headerSustainableDevelopmentMenuDummy} />
        <TermsPolicy
          description={contentBlock.description}
          title={contentBlock.title}
          isPageSustainableDevelopment
        />
      </section>
    </>
  );
};

export default SustainableDevelopmentContainer;
