import React from 'react';

import BannerRecruitmentContainer from './bannerRecruitmentContainer';
import CorporateGovernanceTableContainer from './corporateGovernanceTable';

import Breadcrumb from 'components/molecules/Breadcrumb';
import Section from 'components/templates/Section';
import HelmetContainer from 'container/helmet';
import { convertBanner } from 'utils/functions';

const CorporateGovernanceContainer: React.FC<BasePageData<[]>> = ({
  seoData,
  banners,
  openGraphData,
  pageData,
}) => {
  const convertedBanner = convertBanner(banners);
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
          breadcrumbs={[
            {
              pathName: '/',
              title: 'Trang chủ',
            },
            {
              pathName: '/quan-he-dau-tu',
              title: 'Quan hệ đầu tư',
            },
            {
              pathName: pageData.slug,
              title: pageData.title,
            },
          ]}
        />
      </div>
      <Section modifiers="noPt">
        <CorporateGovernanceTableContainer />
      </Section>
    </>
  );
};
export default CorporateGovernanceContainer;
