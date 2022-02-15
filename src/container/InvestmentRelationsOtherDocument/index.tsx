import React, { useMemo } from 'react';

import InvestmentRelations from './InvestmentRelationsOtherDocument';

import Breadcrumb from 'components/molecules/Breadcrumb';
import Section from 'components/templates/Section';
import BannerInvestmentRelations from 'container/InvestmentRelationsOtherDocument/bannerInvestmentRelationsOtherDocument';
import HelmetContainer from 'container/helmet';
import { useAppSelector } from 'store/hooks';
import { getBreadcrumbs } from 'utils/breadcrumbs';
import { getImageURL } from 'utils/functions';

const InvestmentRelationsOtherDocumentContainer: React.FC<BasePageData<[]>> = ({
  banners,
  seoData,
  openGraphData,
  breadcrumbs,
  pageData,
}) => {
  const language = useAppSelector((state) => state.system.language);

  const listBanner = useMemo(() => banners.map((item) => ({
    src: getImageURL(item.data.imageDesktop),
    srcTablet: getImageURL(item.data.imageTablet),
    srcMobile: getImageURL(item.data.imageMobile),
    title: item.data.title,
  })), [banners]);

  return (
    <>
      <HelmetContainer
        seoData={{
          ...seoData,
        }}
        ogData={{
          ...openGraphData,
        }}
      />
      <BannerInvestmentRelations
        src={listBanner[0]?.src || ''}
        title={listBanner[0]?.title || ''}
        srcMobile={listBanner[0]?.srcMobile}
        srcTablet={listBanner[0]?.srcTablet}
      />
      <div className="p-corporateGovernance_breadcrumb u-mt-md-24 u-mt-14 u-mb-md-60 u-mb-25">
        <Breadcrumb
          breadcrumbs={getBreadcrumbs({
            breadcrumbs: breadcrumbs || [],
            language,
            title: pageData.title,
          })}
        />
      </div>
      <Section modifiers="noPt">
        <InvestmentRelations />
      </Section>
    </>
  );
};

export default InvestmentRelationsOtherDocumentContainer;
