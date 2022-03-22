import React, { useMemo } from 'react';

import SustainableDevelopmentMenu from 'components/organisms/SustainableDevelopmentMenu';
import TermsPolicy from 'components/templates/TermsPolicy';
import HelmetContainer from 'container/helmet';
import { useAppSelector } from 'store/hooks';
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
  const groupedDevelopment = useAppSelector((state) => state.menus.groupedDevelopment);
  const contentBlock = useMemo(
    () => getBlockData('content', blocks) as Content,
    [blocks],
  );

  return (
    <>
      <HelmetContainer seoData={seoData} ogData={openGraphData} />
      <section className="p-sustainableDevelopmentMenu pt-header">
        <div className="p-sustainableDevelopmentMenu_menu">
          <SustainableDevelopmentMenu headerDataMenus={groupedDevelopment} />
        </div>
        <div className="p-sustainableDevelopmentMenu_content">
          <TermsPolicy
            description={contentBlock.description}
            title={contentBlock.title}
            isPageSustainableDevelopment
          />
        </div>
      </section>
    </>
  );
};

export default SustainableDevelopmentContainer;
