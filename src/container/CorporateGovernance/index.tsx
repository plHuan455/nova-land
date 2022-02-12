import React from 'react';

import BannerRecruitmentContainer from './bannerRecruitmentContainer';
import CorporateGovernanceTableContainer from './corporateGovernanceTable';

import Breadcrumb from 'components/molecules/Breadcrumb';
import Section from 'components/templates/Section';
import HelmetContainer from 'container/helmet';
import { useAppSelector } from 'store/hooks';
import { getBreadcrumbs } from 'utils/breadcrumbs';
import { convertBanner } from 'utils/functions';

const CorporateGovernanceContainer: React.FC<BasePageData<[]>> = ({
  seoData,
  banners,
  openGraphData,
  pageData,
  breadcrumbs,
}) => {
  const convertedBanner = convertBanner(banners);
  const language = useAppSelector((state) => state.system.language);

  return (
    <>
      <HelmetContainer seoData={seoData} ogData={openGraphData} />
      <BannerRecruitmentContainer
        title={banners[0].data.title}
        imageSrc={convertedBanner[0].src}
        imageTabletSrc={convertedBanner[0].srcTablet}
        imageMobileSrc={convertedBanner[0].srcMobile}
      />
      <div className="p-corporateGovernance_breadcrumb u-mt-md-24 u-mt-14 u-mb-md-60 u-mb-25">
        <Breadcrumb
          breadcrumbs={getBreadcrumbs({
            breadcrumbs,
            language,
            title: pageData.title,
          })}
        />
      </div>
      <Section modifiers="noPt">
        <CorporateGovernanceTableContainer />
      </Section>
    </>
  );
};
export default CorporateGovernanceContainer;
